from flask import Flask, request, jsonify
from flask_cors import CORS

from model.prediction import predict_pollution


app = Flask(__name__)

# Allow React frontend and ESP32 connections
CORS(app)


# ============================================================
# LATEST SENSOR DATA
# ============================================================

latest_sensor_data = {}


# ============================================================
# LATEST AI PREDICTION
# ============================================================

latest_prediction = None


# ============================================================
# HOME / HEALTH CHECK
# ============================================================

@app.route("/")
def home():

    return jsonify({

        "message": "Smart PortGuard AI API Running",

        "status": "active"

    })


# ============================================================
# RECEIVE SENSOR DATA
# ESP32 / VIRTUAL ESP32 → Flask → AI
# ============================================================

@app.route("/sensor-data", methods=["POST"])
def receive_sensor_data():

    try:

        data = request.get_json()


        # Check if JSON was received

        if not data:

            return jsonify({

                "error": "No sensor data received"

            }), 400


        # Required sensor fields

        required_fields = [

            "temperature",
            "humidity",
            "air_quality",
            "pm25",
            "pm10",
            "co",
            "no2",
            "turbidity"

        ]


        # Check all fields

        for field in required_fields:

            if field not in data:

                return jsonify({

                    "error": f"Missing field: {field}"

                }), 400


        # ====================================================
        # STORE SENSOR DATA
        # ====================================================

        global latest_sensor_data

        latest_sensor_data = data


        # ====================================================
        # AUTOMATIC AI PREDICTION
        # ====================================================

        global latest_prediction


        latest_prediction = predict_pollution(

            data["temperature"],

            data["humidity"],

            data["air_quality"],

            data["pm25"],

            data["pm10"],

            data["co"],

            data["no2"],

            data["turbidity"]

        )


        # ====================================================
        # PRINT SENSOR DATA
        # ====================================================

        print("\n================================")
        print("NEW SENSOR DATA RECEIVED")
        print("================================")

        print(
            "Temperature :",
            data["temperature"]
        )

        print(
            "Humidity    :",
            data["humidity"]
        )

        print(
            "Air Quality :",
            data["air_quality"]
        )

        print(
            "PM2.5       :",
            data["pm25"]
        )

        print(
            "PM10        :",
            data["pm10"]
        )

        print(
            "CO          :",
            data["co"]
        )

        print(
            "NO2         :",
            data["no2"]
        )

        print(
            "Turbidity   :",
            data["turbidity"]
        )


        # ====================================================
        # PRINT AI PREDICTION
        # ====================================================

        print("--------------------------------")
        print(
            "AI Prediction :",
            latest_prediction
        )
        print("================================\n")


        # ====================================================
        # RESPONSE
        # ====================================================

        return jsonify({

            "message":
                "Sensor data received successfully",

            "data":
                latest_sensor_data,

            "prediction":
                latest_prediction

        })


    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500


# ============================================================
# GET LATEST SENSOR DATA + AI PREDICTION
# Dashboard → Flask
# ============================================================

@app.route("/sensor-data", methods=["GET"])
def get_sensor_data():

    return jsonify({

        "status": "success",

        "data":
            latest_sensor_data,

        "prediction":
            latest_prediction

    })


# ============================================================
# ML PREDICTION API
# ============================================================

@app.route("/predict", methods=["POST"])
def prediction():

    try:

        data = request.get_json()


        # Check JSON

        if not data:

            return jsonify({

                "error":
                    "No JSON data received"

            }), 400


        # Required ML fields

        required_fields = [

            "temperature",
            "humidity",
            "air_quality",
            "pm25",
            "pm10",
            "co",
            "no2",
            "turbidity"

        ]


        # Check every required field

        for field in required_fields:

            if field not in data:

                return jsonify({

                    "error":
                        f"Missing field: {field}"

                }), 400


        # ====================================================
        # SEND 8 FEATURES TO RANDOM FOREST
        # ====================================================

        result = predict_pollution(

            data["temperature"],

            data["humidity"],

            data["air_quality"],

            data["pm25"],

            data["pm10"],

            data["co"],

            data["no2"],

            data["turbidity"]

        )


        return jsonify({

            "prediction":
                result

        })


    except Exception as e:

        return jsonify({

            "error":
                str(e)

        }), 500


# ============================================================
# RUN SERVER
# ============================================================

if __name__ == "__main__":

    app.run(

        host="0.0.0.0",

        port=5000,

        debug=True

    )