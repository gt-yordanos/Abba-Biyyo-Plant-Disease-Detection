import React, { useState } from "react";
import axios from "axios";
import {
  FiUploadCloud,
  FiHome,
  FiUsers,
  FiUser,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { MdSmartToy } from "react-icons/md";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8000/predict", formData);
      setResult(res.data);
    } catch (error) {
      console.error("Prediction failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen transition-colors duration-300`}>
      {/* Nav Header */}
      <nav className={`flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-24 py-4 shadow-md ${dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
        <h1 className="text-2xl font-bold flex items-center gap-2 text-green-700 dark:text-green-400">
          🌽 Abbaa Biyyo
        </h1>
        <button
          className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setDark(!dark)}
        >
          {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </nav>

      {/* Description */}
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24 mt-6">
        <p className={`text-sm transition-colors duration-300 ${dark ? "text-gray-300" : "text-gray-600"}`}>
          <span className="font-semibold text-green-400">Abbaa Biyyo</span> is an agricultural assistant app for Ethiopian farmers, offering disease detection, medicine suggestions, Q&A, weather updates, and a chatbot — all in local languages. This module is part of our final year CS project.
        </p>
      </div>

      {/* Predictor Panel */}
      <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className={`w-full max-w-md mx-auto ${dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"} shadow-xl rounded-2xl p-6`}>
          <h2 className="text-xl font-bold mb-4 text-center text-green-700 dark:text-green-400">
            🌿 Plant Disease Detector
          </h2>

          <label className="flex items-center justify-center gap-2 border-2 border-dashed border-green-500 p-4 rounded-xl cursor-pointer hover:bg-green-50 dark:hover:bg-green-900 mb-4">
            <FiUploadCloud className="text-green-600 text-xl" />
            <span className="text-green-600 font-medium">Choose Image</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setFile(e.target.files[0]);
                setResult(null);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
              className="hidden"
            />
          </label>

          {preview && <img src={preview} alt="Preview" className="mx-auto mb-4 max-h-64 rounded-xl" />}

          <button
            onClick={handleUpload}
            disabled={!file || loading}
            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center justify-center"
          >
            {loading ? (
              <span className="loading loading-spinner loading-lg text-white"></span>
            ) : (
              "Predict"
            )}
          </button>

          {result && (
            <div className="mt-6 text-center">
              <h2 className="text-lg font-semibold text-green-700 dark:text-green-400">
                ✅ Prediction: {result.predicted_class}
              </h2>
              <p className="text-sm">Confidence: {result.confidence}%</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Mockup */}
      <div className="flex justify-center mt-12 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="mockup-phone">
          <div className="mockup-phone-camera"></div>
          <div className={`mockup-phone-display ${dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
            <div className="flex flex-col justify-center items-center h-full">
              {/* Main content */}
              <div className="flex-grow flex flex-col items-center text-center px-6 pt-30 gap-4 ">
                <h2 className="text-lg font-bold text-green-700 dark:text-green-400">
                  🌿 Plant Disease Detector
                </h2>

                <label className="flex items-center justify-center gap-2 border-2 border-dashed border-green-500 px-4 py-3 rounded-md cursor-pointer hover:bg-green-50 dark:hover:bg-green-900">
                  <FiUploadCloud className="text-green-600 text-lg" />
                  <span className="text-green-600 text-sm">Choose Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      setResult(null);
                      setPreview(URL.createObjectURL(e.target.files[0]));
                    }}
                    className="hidden"
                  />
                </label>

                {preview && <img src={preview} alt="Preview" className="max-h-40 rounded-md" />}

                <button
                  onClick={handleUpload}
                  disabled={!file || loading}
                  className="bg-green-600 text-white px-4 py-2 rounded-md text-sm mt-4 hover:bg-green-700"
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-sm text-white"></span>
                  ) : (
                    "Predict"
                  )}
                </button>

                {loading ? (
                  <span className="loading loading-spinner loading-sm text-green-700 mt-4"></span>
                ) : result ? (
                  <div className="text-sm mt-4">
                    <p className="font-medium">✅ {result.predicted_class}</p>
                    <p className="text-xs">Confidence: {result.confidence}%</p>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Upload an image to see results.
                  </p>
                )}
              </div>

              {/* Full-width Bottom Nav */}
              <div className={`flex justify-around items-center py-4 w-full border-t ${dark ? "bg-gray-900 border-gray-700" : "bg-gray-100 border-gray-300"}`}>
                <button className={`${dark ? "text-green-400" : "text-green-600"}`}>
                  <FiHome size={24} />
                </button>
                <button className={`${dark ? "text-gray-300 hover:text-green-400" : "text-gray-500 hover:text-green-600"}`}>
                  <MdSmartToy size={24} />
                </button>
                <button className={`${dark ? "text-gray-300 hover:text-green-400" : "text-gray-500 hover:text-green-600"}`}>
                  <FiUsers size={24} />
                </button>
                <button className={`${dark ? "text-gray-300 hover:text-green-400" : "text-gray-500 hover:text-green-600"}`}>
                  <FiUser size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`w-full py-6 mt-10 text-center ${dark ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-900"}`}>
        <p className="text-sm">
          © 2025 Abbaa Biyyo. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
