export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Image */}
   

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">
          {post.title}
        </h2>

        <p className="text-gray-600 text-sm mb-4">
          {post.body.substring(0, 80)}...
        </p>

   {/* <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      /> */}
        <button
         
          className="bg-gray-800 text-white px-4 py-2 mt-8 rounded-lg hover:bg-gray-900 transition"
        >
          Read More
        </button>
      </div>
    </div>
  );
}