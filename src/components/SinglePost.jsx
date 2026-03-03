import { useEffect, useState } from "react";

export default function SinglePost({postId , onBack }) {


  const[post , setPost] = useState(null)
  const[loading,setLoading] = useState(true)


  useEffect(() => {
    fetch(`http://localhost:3000/posts/${postId}`)
    .then(response => response.json())
    .then(data => {
      setPost(data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
    setLoading(false)
    })
  },[postId])

  if (loading) {
    return <div >loading..........</div>
  }
  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {post.title}
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          {post.body}
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