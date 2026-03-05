import { TrashIcon } from "@heroicons/react/24/outline";
export default function PostCard({ post, onReadMore, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Image */}
   
      {/* Content */}
      <div className="p-5 ">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">
          {post.title}
        </h2>

        <p className="text-gray-600 text-sm mb-4">
          {post.body.substring(0, 80)}...
        </p>

   <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />

      <div className="mt-8 flex items-center justify-between">
        <button
         onClick={onReadMore}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Read More
        </button>

          <button
          onClick={onDelete}
    className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition flex items-center justify-center"
  >
  
           <TrashIcon className="w-6 h-6" />
          </button>

          </div>
         
      </div>
    </div>
  );
}