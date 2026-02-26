import React from 'react'

export default function Controls({onIncrease , onDecrease,onReset, onSwitch ,isDark}) {
  return (
    <div className='flex flex-col gap-10'>

     <div className="pt-20 flex gap-8">
          <button
            className="px-6 py-4 bg-green-600 text-white rounded-2xl"
            onClick={onIncrease}
          >
            Start Counting
          </button>
          <button
            className="px-6 py-4 bg-amber-600 text-white rounded-2xl"
            onClick={onDecrease}
          >
            Decrease
          </button>
          <button
            className="px-6 py-4 bg-red-600 text-white rounded-2xl"
            onClick={onReset}
          >
            Reset
          </button>
        </div>

 <button
          className={`px-6 py-4 rounded-2xl  ${isDark ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}`}
          onClick={onSwitch}
        >
          Switch theme
        </button>

    </div>
  )
}
