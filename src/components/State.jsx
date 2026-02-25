import React from "react";

import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  function handleReset() {
    const confirmed = window.confirm(
      "Confirm Reset , You are about to reset to 0 , are you sure",
    );
    if (confirmed) {
      setCount(0);
    }
  }

  return (
    <div>
      <div
        className={`font flex flex-col min-h-screen items-center  py-20 text-5xl gap-10 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        <h1 >Online Tashbih Counter</h1>
        <h1>Start counting your Tasbeeh</h1>
        <h1>{count}</h1>

        <div className="pt-20 flex gap-8">
          <button
            className="px-6 py-4 bg-green-600 text-white rounded-2xl"
            onClick={handleIncrease}
          >
            Start Counting
          </button>
          <button
            className="px-6 py-4 bg-amber-600 text-white rounded-2xl"
            onClick={handleDecrease}
          >
            Decrease
          </button>
          <button
            className="px-6 py-4 bg-red-600 text-white rounded-2xl"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <button
          className={`px-6 py-4 rounded-2xl ${isDark ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}`}
          onClick={() => setIsDark(!isDark)}
        >
          Switch theme
        </button>
      </div>
    </div>
  );
}
