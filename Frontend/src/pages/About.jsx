import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function About() {
  const { dark } = useTheme();

  return (
    <div
      className={`px-4 sm:px-8 md:px-12 lg:px-24 py-16 ${
        dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto text-lg leading-relaxed">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-4">
          🌾 About Abbaa Biyyo
        </h1>

        {/* Mission Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2 text-emerald-600 dark:text-emerald-400">
            🚀 Our Mission
          </h2>
          <p>
            <strong>Abbaa Biyyo</strong> is an AI-powered agricultural assistant developed by a collaborative team of software developers and agricultural experts. We're on a mission to revolutionize Ethiopian agriculture by leveraging modern technology to give farmers real-time, intelligent tools right at their fingertips.
          </p>
          <p className="mt-4">
            We envision a future where every Ethiopian farmer, no matter how remote, has access to the knowledge, community, and tools they need to succeed and thrive in a digital agricultural ecosystem.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2 text-emerald-600 dark:text-emerald-400">
            🌟 What We’re Building
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>🌿 Plant Health Monitoring:</strong> Instantly analyze crop images using AI to detect diseases early and prevent spread.
            </li>
            <li>
              <strong>🌦️ Real-Time Weather Forecasts:</strong> Provide localized, agricultural-focused weather updates to help farmers plan effectively.
            </li>
            <li>
              <strong>🤖 AI Chat Assistant:</strong> A smart chatbot to answer common questions, offer guidance, and support farmers 24/7.
            </li>
            <li>
              <strong>👨🏾‍🌾 Community Forum:</strong> A digital space for farmer-to-farmer communication, knowledge sharing, and peer support.
            </li>
          </ul>
        </section>

        {/* Team Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2 text-emerald-600 dark:text-emerald-400">
            🧠 Who We Are
          </h2>
          <p>
            We are a dedicated team of Ethiopian software engineers and agricultural professionals, united by our passion for impact. Our combined expertise allows us to understand both the technological possibilities and the real-world challenges farmers face.
          </p>
          <p className="mt-2">
            We’re building Abbaa Biyyo not as a product, but as a **movement**—one that connects innovation with cultural understanding and puts Ethiopian farmers at the center.
          </p>
        </section>

        {/* Fundraising Call */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2 text-emerald-600 dark:text-emerald-400">
            💡 From Prototype to Reality
          </h2>
          <p>
            Abbaa Biyyo is currently a working prototype. To take it further—to launch a full platform that reaches farmers in every region—we are raising funds and seeking support from individuals, organizations, and partners who share our vision.
          </p>
          <p className="mt-4">
            With your help, we will:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Build scalable infrastructure and a mobile-friendly app</li>
            <li>Translate the platform into local languages</li>
            <li>Train farmers in using the technology</li>
            <li>Deploy in rural areas with low digital access</li>
          </ul>
        </section>

        {/* Final CTA */}
        <section className="text-center mt-10">
          <p className="text-xl font-semibold text-emerald-700 dark:text-emerald-400">
            🌱 Let’s grow the future of Ethiopian agriculture — together.
          </p>
          <p className="mt-2">
            If you’re interested in supporting us, collaborating, or learning more, reach out — we’d love to hear from you!
          </p>
        </section>
      </div>
    </div>
  );
}