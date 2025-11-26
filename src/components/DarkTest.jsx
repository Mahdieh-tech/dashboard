import React, { useState, useEffect } from "react";

export default function DarkTest() {
  const [isDark, setIsDark] = useState(false);
  const [debugInfo, setDebugInfo] = useState({});

  useEffect(() => {
    updateDebugInfo();
    
    const hasDarkClass = document.documentElement.classList.contains("dark");
    console.log("Dark class present:", hasDarkClass);
    console.log("React state isDark:", isDark);
  }, [isDark]);

  const updateDebugInfo = () => {
    setDebugInfo({
      htmlHasDarkClass: document.documentElement.classList.contains("dark"),
      reactState: isDark,
      localStorageValue: localStorage.getItem("darkMode"),
      tailwindConfig: "class",
      timestamp: new Date().toLocaleTimeString(),
    });
  };

  const toggleDark = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", (!isDark).toString());
    updateDebugInfo();
  };

  const forceAddDark = () => {
    document.documentElement.classList.add("dark");
    setIsDark(true);
    updateDebugInfo();
  };

  const forceRemoveDark = () => {
    document.documentElement.classList.remove("dark");
    setIsDark(false);
    updateDebugInfo();
  };

  return (
    <div className="fixed top-4 left-4 right-4 bg-white 
    dark:bg-gray-800 border-2 border-red-500 dark:border-yellow-500 
    rounded-lg p-4 shadow-lg z-50 max-w-md">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        🎨 Dark Mode Test
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white dark:bg-gray-900 p-3 border 
        border-gray-200 dark:border-gray-700 rounded">
          <p className="text-black dark:text-white text-sm">
            This should be white/black
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 border 
        border-gray-300 dark:border-gray-600 rounded">
          <p className="text-gray-800 dark:text-gray-200 text-sm">
            This should be gray
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={toggleDark}
          className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
        >
          Toggle Dark ({isDark ? "ON" : "OFF"})
        </button>
        <button
          onClick={forceAddDark}
          className="px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded text-sm"
        >
          Force Dark
        </button>
        <button
          onClick={forceRemoveDark}
          className="px-3 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded text-sm"
        >
          Force Light
        </button>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded border">
        <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">
          Debug Info:
        </h3>
        <div className="text-xs space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">HTML class:</span>
            <span
              className={`font-mono ${
                debugInfo.htmlHasDarkClass
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {debugInfo.htmlHasDarkClass ? "has 'dark'" : "no 'dark'"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">React State:</span>
            <span
              className={`font-mono ${
                debugInfo.reactState
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {debugInfo.reactState ? "true" : "false"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">localStorage:</span>
            <span className="font-mono text-purple-600 dark:text-purple-400">
              {debugInfo.localStorageValue || "null"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Tailwind Config:</span>
            <span className="font-mono text-blue-600 dark:text-blue-400">
              {debugInfo.tailwindConfig}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Last Update:</span>
            <span className="font-mono text-gray-500 dark:text-gray-400">
              {debugInfo.timestamp}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`mt-3 p-2 rounded text-center font-bold ${
          debugInfo.htmlHasDarkClass && debugInfo.reactState
            ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
            : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
        }`}
      >
        {debugInfo.htmlHasDarkClass && debugInfo.reactState
          ? "✅ Dark Mode WORKING!"
          : "❌ Dark Mode NOT working"}
      </div>

      <div className="mt-3 text-xs text-gray-600 dark:text-gray-400">
        <p>💡 Open Browser Console (F12) and run:</p>
        <code className="block bg-black text-green-400 p-1 rounded mt-1">
          document.documentElement.classList.contains('dark')
        </code>
      </div>
    </div>
  );
}