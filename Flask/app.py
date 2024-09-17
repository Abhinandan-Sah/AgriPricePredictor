import joblib
import gzip
import numpy as np
import pandas as pd


with gzip.open('Model/meta.joblib.gz', 'rb') as f:
    loaded_model1= joblib.load(f)

with gzip.open('Model/random.joblib.gz', 'rb') as f:
    loaded_model2= joblib.load(f)

with gzip.open('Model/finale.joblib.gz', 'rb') as f:
    loaded_model3= joblib.load(f)

# Assuming 'X.columns' comes from the training data
# Input data for prediction
input_data = np.array([
    "2023-07-01",  # Full date is necessary
    "Maharashtra",
    "Mumbai",
    "Wheat",
    "Kharif",
    25,
    124,
    1800,
    3200,
    150,
    300,
    0.4,
    0.7
], dtype=object).reshape(1, 13)

X=['Date', 'State', 'City', 'Crop Type', 'Season', 'Temperature (°C)',
       'Rainfall (mm)', 'Supply Volume (tons)', 'Demand Volume (tons)',
       'Transportation Cost (₹/ton)', 'Fertilizer Usage (kg/hectare)',
       'Pest Infestation (0-1)', 'Market Competition (0-1)']
# Convert the input data to a DataFrame (similar to training data)
input_df = pd.DataFrame(input_data, columns=X)

# Convert the date to datetime format
input_df["Date"] = pd.to_datetime(input_df["Date"], format="%Y-%m-%d")

# Prepare the date column for Prophet
input_df["ds"] = input_df["Date"]

# Make predictions using the loaded models
rf_pred = loaded_model2.predict(input_df.drop(columns=["ds", "Date"]))  # Drop both 'ds' and 'Date' for RandomForest
prophet_pred = loaded_model1.predict(input_df[['ds']])

# Combine RandomForest and Prophet predictions
combined_features = np.column_stack((rf_pred, prophet_pred['yhat'].values))

# Final prediction using the combined features
final_pred = loaded_model3.predict(combined_features)

print(f"Predicted price: {final_pred[0]}")