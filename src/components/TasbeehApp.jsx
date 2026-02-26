import React from "react";

import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import Controls from "./Controls";

export default function TasbeehApp() {
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

  function handleSwitch() {
    setIsDark(!isDark)
  }
  return (
    <div>
      <div
        className={`font flex flex-col min-h-screen items-center  py-20 text-5xl gap-10 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        <h1 >Online Tashbih Counter</h1>
        <h1>Start counting your Tasbeeh</h1>
        <CounterDisplay count={count}  />

        <Controls 
        onIncrease = {handleIncrease}
        onDecrease = {handleDecrease}
        onReset = {handleReset}
        onSwitch = {handleSwitch}
        isdark = {isDark}
        
        />
       
      </div>
    </div>
  );
}
