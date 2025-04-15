from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import uvicorn
import os
from PIL import Image
import io

app = FastAPI()

# Allow CORS for your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model once
model = load_model("CornDisease.keras")

# Class names in training order
class_names = ['Corn___Common_Rust', 'Corn___Gray_Leaf_Spot', 'Corn___Healthy', 'Corn___Leaf_Blight']
image_size = (128, 128)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    img = Image.open(io.BytesIO(contents)).convert("RGB")
    img = img.resize(image_size)
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)

    prediction = model.predict(img_array)
    predicted_class = class_names[np.argmax(prediction)]
    confidence = float(np.max(prediction))

    return {
        "predicted_class": predicted_class,
        "confidence": round(confidence * 100, 2)
    }

# ✅ Add logging and run the server directly
if __name__ == "__main__":
    print("🚀 Starting FastAPI server at http://localhost:8000")
    uvicorn.run("api:app", host="0.0.0.0", port=8000, reload=True, log_level="info")