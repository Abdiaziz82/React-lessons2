import React from "react";

export default function Events() {
  function handleClick(event) {
    console.log(event);
    alert("i'm being clicked ");
  }

  function handleDoubleClick(event) {
    console.log(event);
    alert("i am being doubleclicked");
  }

  function handleChange(event) {
    if (event.target.value.length > 10) {
      alert("The number should not be more than 10");
    }
    console.log(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("the form is submitted successfully");
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowDown") {
      console.log("up");
    }
  }

  return (
    <div>
      <div className="font m-20 flex gap-6">
        <button
          onClick={handleClick}
          className="px-8 py-4 bg-green-700 text-white text-lg rounded"
        >
          Click Me
        </button>
        <button
          onDoubleClick={handleDoubleClick}
          className="px-8 py-4 bg-green-700 text-white text-lg rounded"
        >
          Double CLick me
        </button>

        <input
          //   onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="search"
          placeholder="Search something..... "
          className="border border-gray-700"
        />

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            onFocus={() => console.log("I'm focused")}
            onBlur={() => console.log("i'm away")}
            onChange={handleChange}
            placeholder="type ur number..... "
            className="border border-gray-700"
          />
          <button>Register </button>
        </form>
      </div>
    </div>
  );
}
