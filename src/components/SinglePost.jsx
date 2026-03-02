import { useEffect, useState } from "react";

export default function SinglePost({ imageUrl, title, body, onBack }) {
  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {title}
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          {body}
        </p>

        <button
          onClick={onBack}
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Back to Posts
        </button>
      </div>
    </div>
  );
}