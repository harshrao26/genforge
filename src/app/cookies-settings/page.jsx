"use client";

import { useState } from "react";

const CookiesSettings = () => {
  const [settings, setSettings] = useState({
    necessary: true, // always on
    preferences: false,
    statistics: false,
    marketing: false,
  });

  const handleToggle = (key) => {
    if (key !== "necessary") {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    }
  };

  const handleSave = () => {
    console.log("Saved settings:", settings);
    alert("Your cookie preferences have been saved.");
    // Integrate with cookie consent libraries or APIs as needed
  };

  return (
    <div className="bg-black">

      <div className="max-w-3xl mx-auto px-6 py-20 text-gray-50 bg-black">
      <h1 className="text-4xl font-semibold mb-6 text-center">
        Cookie Settings
      </h1>

      <p className="mb-6 text-gray-60 text-center">
        We use cookies to enhance your experience, analyze traffic, and offer personalized content. You can manage your cookie preferences below.
      </p>

      {/* Cookie Options */}
      <div className="space-y-6">

        {/* Necessary Cookies */}
        <div className="flex justify-between items-start border p-4 rounded-lg">
          <div>
            <h2 className="text-lg font-semibold">Strictly Necessary Cookies</h2>
            <p className="text-sm text-gray-60 mt-1">
              Required for the website to function properly. These cannot be disabled.
            </p>
          </div>
          <div>
            <span className="text-sm main-p-bg px-3 py-1 rounded-full text-gray-60">Always Active</span>
          </div>
        </div>

        {/* Preferences */}
        <CookieToggle
          title="Preferences Cookies"
          description="Remember your preferences, such as language or region."
          enabled={settings.preferences}
          onToggle={() => handleToggle("preferences")}
        />

        {/* Statistics */}
        <CookieToggle
          title="Statistics Cookies"
          description="Help us understand how visitors interact with our website."
          enabled={settings.statistics}
          onToggle={() => handleToggle("statistics")}
        />

        {/* Marketing */}
        <CookieToggle
          title="Marketing Cookies"
          description="Used to show relevant ads and content based on your browsing."
          enabled={settings.marketing}
          onToggle={() => handleToggle("marketing")}
        />
      </div>

      {/* Save Button */}
      <div className="mt-10 text-center">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
        >
          Save Preferences
        </button>
      </div>
    </div>

    </div>
  );
};

// Reusable toggle component
const CookieToggle = ({ title, description, enabled, onToggle }) => (
  <div className="flex justify-between items-start border p-4 rounded-lg">
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-60 mt-1">{description}</p>
    </div>
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={enabled}
          onChange={onToggle}
          className="sr-only"
        />
        <div
          className={`w-11 h-6 rounded-full ${
            enabled ? "bg-violet-600" : "bg-gray-300"
          } relative transition-colors duration-300`}
        >
          <span
            className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${
              enabled ? "translate-x-5" : ""
            }`}
          ></span>
        </div>
      </label>
    </div>
  </div>
);

export default CookiesSettings;
