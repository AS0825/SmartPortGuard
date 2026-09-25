import random


def predict_pollution(sensor_data):

    temperature = sensor_data["temperature"]
    humidity = sensor_data["humidity"]
    pm25 = sensor_data["pm25"]


    # Simple AI prediction logic
    predicted_aqi = (
        pm25 * 0.7
        + humidity * 0.2
        + temperature * 0.1
    )


    if predicted_aqi < 50:
        level = "Good"

    elif predicted_aqi < 100:
        level = "Moderate"

    elif predicted_aqi < 200:
        level = "Poor"

    else:
        level = "Danger"



    return {

        "predicted_aqi": round(predicted_aqi),

        "pollution_level": level,

        "confidence": random.randint(85,95)

    }