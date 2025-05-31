import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import heroImg from "../assets/hero-image.jpg";
import {
  FiActivity,
  FiUsers,
  FiCloudRain,
  FiCpu,
  FiMessageSquare,
  FiGlobe,
} from "react-icons/fi";

export default function Home() {
  const { dark } = useTheme();

  const features = [
    {
      title: "Plant Health Monitoring",
      description:
        "Upload images of crops and let our AI detect potential diseases to take timely action.",
      icon: <FiActivity className="text-emerald-500 w-7 h-7" />,
    },
    {
      title: "Community Engagement",
      description:
        "A platform where farmers can ask questions, post tips, answer, like, and comment—building a strong network.",
      icon: <FiUsers className="text-emerald-500 w-7 h-7" />,
    },
    {
      title: "Weather Forecasting",
      description:
        "Receive reliable weather forecasts tailored for agriculture and location-based insights.",
      icon: <FiCloudRain className="text-emerald-500 w-7 h-7" />,
    },
    {
      title: "AI Recommendations",
      description:
        "Personalized AI-driven suggestions to optimize crop health, planting schedules, and treatments.",
      icon: <FiCpu className="text-emerald-500 w-7 h-7" />,
    },
    {
      title: "Chatbot & Local Language Support",
      description:
        "Interact with our chatbot available in Amharic 🇪🇹, Afaan Oromo, and other local languages to get personalized assistance anytime.",
      icon: <FiMessageSquare className="text-emerald-500 w-7 h-7" />,
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 pt-10 pb-20 space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold text-emerald-900 dark:text-emerald-400">
            Welcome to Abbaa Biyyo
          </h1>
          <p className={`text-lg ${dark ? "text-gray-300" : "text-gray-700"}`}>
            Empowering Ethiopian farmers with AI tools to detect plant diseases,
            connect with their community, and receive tailored agricultural insights.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/detector"
              className={`bg-transparent border-teal-400 border-2 ${dark?'text-white': 'text-black'} px-6 py-3 rounded-full font-medium hover:bg-teal-500 hover:text-white transition cursor-pointer `}
            >
              Try our AI Disease Detector
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={heroImg}
            alt="Farmer with crops"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Purpose Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
          Why Abbaa Biyyo?
        </h2>
        <p className={`text-base ${dark ? "text-gray-300" : "text-gray-700"}`}>
          Despite over 80% of Ethiopia&apos;s economy relying on agriculture, the sector remains underserved.
          Abbaa Biyyo aims to change that by delivering essential tools to help farmers thrive in a digital age.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md transition-colors ${
              dark ? "bg-emerald-950 text-emerald-50" : "bg-emerald-50 text-emerald-900"
            } flex gap-4 items-start`}
          >
            <div className="mt-1">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}