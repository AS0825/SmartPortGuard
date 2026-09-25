import os
import joblib
import numpy as np


# Load the trained Random Forest model
model_path = os.path.join(
    os.path.dirname(__file__),
    "random_forest.pkl"
)

model = joblib.load(model_path)


def predict_pollution(
    temperature,
    humidity,
    air_quality,
    pm25,
    pm10,
    co,
    no2,
    turbidity
):

    # IMPORTANT:
    # The order must be exactly the same
    # as the order used while training the model.

    features = np.array([[
        temperature,
        humidity,
        air_quality,
        pm25,
        pm10,
        co,
        no2,
        turbidity
    ]])

    prediction = model.predict(features)

    return prediction[0]