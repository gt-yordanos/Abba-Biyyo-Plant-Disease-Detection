# 🌽 Abba Biyyo - Plant Disease Detection App

**Abba Biyyo** is an agricultural assistant app built to help Ethiopian farmers identify corn diseases and take action. It features image-based deep learning disease detection, a FastAPI backend, a modern React frontend with Tailwind CSS and DaisyUI, and more.

---

## 📌 Features

- 🌿 Image-based corn disease prediction
- 🤖 Gemini chatbot support
- ☁️ Weather integration
- 💬 Community Q&A
- ⚙️ CNN model using TensorFlow
- ⚡ FastAPI + React full-stack architecture

---

## 🔧 Requirements

- Python < 3.12 (TensorFlow compatibility)
- Jupyter Notebook
- Node.js & npm
- FastAPI, TensorFlow, React, TailwindCSS, DaisyUI

---

## 🧪 Model Training (`CornDisease.ipynb`)

1. Open `CornDisease.ipynb` in Jupyter Notebook.
2. Run all cells.
3. Model will be saved as:

```bash
CornDisease.keras
```

---

## 🤖 Backend (FastAPI)

### 📦 Install dependencies

```bash
pip install fastapi uvicorn pillow numpy tensorflow
```

### ▶️ Run API

```bash
python api.py
```

Runs on: `http://localhost:8000`

---

## 🧠 CNN Architecture

```python
cnn = tf.keras.models.Sequential()

cnn.add(tf.keras.layers.Conv2D(32, 3, padding='same', activation='relu', input_shape=[128,128,3]))
cnn.add(tf.keras.layers.Conv2D(32, 3, activation='relu'))
cnn.add(tf.keras.layers.MaxPool2D(2))

cnn.add(tf.keras.layers.Conv2D(64, 3, padding='same', activation='relu'))
cnn.add(tf.keras.layers.Conv2D(64, 3, activation='relu'))
cnn.add(tf.keras.layers.MaxPool2D(2))

cnn.add(tf.keras.layers.Conv2D(128, 3, padding='same', activation='relu'))
cnn.add(tf.keras.layers.Conv2D(128, 3, activation='relu'))
cnn.add(tf.keras.layers.MaxPool2D(2))

cnn.add(tf.keras.layers.Conv2D(256, 3, padding='same', activation='relu'))
cnn.add(tf.keras.layers.Conv2D(256, 3, activation='relu'))
cnn.add(tf.keras.layers.MaxPool2D(2))

cnn.add(tf.keras.layers.Conv2D(512, 3, padding='same', activation='relu'))
cnn.add(tf.keras.layers.Conv2D(512, 3, activation='relu'))
cnn.add(tf.keras.layers.MaxPool2D(2))

cnn.add(tf.keras.layers.Dropout(0.25))
cnn.add(tf.keras.layers.Flatten())
cnn.add(tf.keras.layers.Dense(1500, activation='relu'))
cnn.add(tf.keras.layers.Dropout(0.4))
cnn.add(tf.keras.layers.Dense(4, activation='softmax'))

cnn.compile(
    optimizer=tf.keras.optimizers.legacy.Adam(learning_rate=0.0001),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)
```

- **Training Accuracy:** 97.88%
- **Validation Accuracy:** 94.48%

---

## 🎨 Frontend (React + Tailwind + DaisyUI)

### 📦 Install

```bash
npm install axios
npm install -D tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

### ⚙️ Vite Config (`vite.config.js`)

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],
});
```

### 🎨 Add CSS (`src/App.css`)

```css
@import "tailwindcss";
@plugin "daisyui";
```

### ▶️ Run

```bash
npm run dev
```

---

## 📁 Project Structure

```
Abba-Biyyo/
├── api.py
├── CornDisease.ipynb
├── CornDisease.keras
├── Frontend/
│   ├── src/
│   ├── App.css
│   └── vite.config.js
├── train/
├── val/
├── test/
└── README.md
```

---

## 👨‍🎓 Project Info

**Abba Biyyo - Agricultural Assistant**  
Final Year Project — Computer Science  
Haramaya University
