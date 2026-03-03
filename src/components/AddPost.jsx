import { useState } from "react";

export default function AddPost() {




  return (
    <div className="bg-white p-6 rounded-2xl shadow-md sticky top-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Post</h2>

      <form  className="space-y-4">
        <input
          type="number"
          name="userId"
          placeholder="User ID"
          
         
          className="w-full border p-2 rounded-lg"
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
       
          className="w-full border p-2 rounded-lg"
        />

        <textarea
          name="body"
          placeholder="Post body"
         
          className="w-full border p-2 rounded-lg"
          rows="4"
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
         
          className="w-full border p-2 rounded-lg"
        />

        <button
          type="submit"
          
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
         Add Post
        </button>
      </form>
    </div>
  );
}