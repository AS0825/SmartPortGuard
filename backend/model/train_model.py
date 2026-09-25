import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib

# Load Dataset
df = pd.read_excel("dataset.xlsx")

# Features
X = df[
    [
        "Temperature_C",
        "Humidity_pct",
        "MQ135_ppm",
        "PM2.5_ugm3",
        "PM10_ugm3",
        "CO_mgm3",
        "NO2_ugm3",
        "Turbidity_NTU",
    ]
]

# Target
y = df["Pollution_Level"]

# Train Test Split
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
)

# Random Forest
model = RandomForestClassifier(
    n_estimators=200,
    random_state=42,
)

model.fit(X_train, y_train)

# Prediction
predictions = model.predict(X_test)

print("Accuracy :", accuracy_score(y_test, predictions))

print(classification_report(y_test, predictions))

# Save Model
joblib.dump(model, "random_forest.pkl")

print("Model Saved Successfully")