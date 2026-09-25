import requests
import random
import time


# ============================================================
# FLASK SERVER
# ============================================================

FLASK_URL = "http://127.0.0.1:5000/sensor-data"


# ============================================================
# GENERATE VIRTUAL SENSOR DATA
# ============================================================

def generate_sensor_data():

    temperature = round(
        random.uniform(25, 35),
        2
    )

    humidity = round(
        random.uniform(55, 90),
        2
    )

    air_quality = random.randint(
        50,
        200
    )

    pm25 = round(
        random.uniform(15, 100),
        2
    )

    pm10 = round(
        random.uniform(30, 150),
        2
    )

    co = round(
        random.uniform(0.5, 3.0),
        2
    )

    no2 = round(
        random.uniform(15, 80),
        2
    )

    turbidity = round(
        random.uniform(2, 20),
        2
    )


    return {

        "temperature": temperature,

        "humidity": humidity,

        "air_quality": air_quality,

        "pm25": pm25,

        "pm10": pm10,

        "co": co,

        "no2": no2,

        "turbidity": turbidity

    }


# ============================================================
# SEND DATA TO FLASK
# ============================================================

def send_sensor_data(data):

    try:

        response = requests.post(

            FLASK_URL,

            json=data,

            timeout=5

        )


        if response.status_code == 200:

            print("✓ Sensor data sent successfully")

        else:

            print(
                "✗ Flask error:",
                response.status_code
            )


    except requests.exceptions.RequestException as error:

        print(
            "✗ Connection error:",
            error
        )


# ============================================================
# MAIN SIMULATOR
# ============================================================

print()
print("======================================")
print("   SMART PORTGUARD VIRTUAL ESP32")
print("======================================")
print()
print("Sending sensor data every 5 seconds...")
print("Press CTRL + C to stop.")
print()


while True:

    sensor_data = generate_sensor_data()


    print()
    print("--------------------------------------")

    print(
        "Temperature :",
        sensor_data["temperature"],
        "°C"
    )

    print(
        "Humidity    :",
        sensor_data["humidity"],
        "%"
    )

    print(
        "Air Quality :",
        sensor_data["air_quality"],
        "AQI"
    )

    print(
        "PM2.5       :",
        sensor_data["pm25"]
    )

    print(
        "PM10        :",
        sensor_data["pm10"]
    )

    print(
        "CO          :",
        sensor_data["co"]
    )

    print(
        "NO2         :",
        sensor_data["no2"]
    )

    print(
        "Turbidity   :",
        sensor_data["turbidity"],
        "NTU"
    )

    print("--------------------------------------")


    send_sensor_data(sensor_data)


    time.sleep(5)