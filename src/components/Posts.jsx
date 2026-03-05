import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import SinglePost from "./SinglePost";
import AddPost from "./AddPost";


export default function Posts() {
const[errors,setErrors] = useState(null)
const[posts , setPosts] = useState([])
const[loading,setLoading] = useState(true)
const[selectedPostId,setSelectedPostId] =useState(null)

useEffect(() => {
  fetch("http://localhost:3000/posts")
  .then(response => response.json())
  .then((data) => { 
    setPosts(data)
   setLoading(false)
  })
  .catch(error =>{ 
    console.log(error)
  setErrors("unable to connect. please try again later ")
  setLoading(false)
  
  })

},[])


function handleAdd(newPost)  {
  setPosts(prev => [...prev , newPost])
}
if(selectedPostId) {
  return (
    <SinglePost
    postId = {selectedPostId}
    onBack = {() => setSelectedPostId(null)}
    
    />
  )
}



if (loading) {
  return <div className="min-h-screen flex items-center justify-center text-blue-700">

      <svg xmlns="http://www.w3.org/2000/svg" class="spinner-1 w-10 h-10 shrink-0 animate-spin" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12.001 5.04a2.32 2.32 0 1 0 0-4.64 2.32 2.32 0 0 0 0 4.64zm0 18.56a2.32 2.32 0 1 0 0-4.64 2.32 2.32 0 0 0 0 4.64zm9.197-14.23a2.32 2.32 0 1 1-2.32-4.02 2.32 2.32 0 0 1 2.32 4.02zM1.956 17.8a2.32 2.32 0 1 0 4.018-2.32 2.32 2.32 0 0 0-4.018 2.32zm16.922.85a2.32 2.32 0 1 1 2.32-4.02 2.32 2.32 0 0 1-2.32 4.02zM1.956 6.2a2.32 2.32 0 1 0 4.018 2.32A2.32 2.32 0 0 0 1.956 6.2z" clip-rule="evenodd" data-original="#000000" />
      </svg>

  </div>
}

if (errors) {
  return (
  
  <div>

    <p className="min-h-screen flex items-center justify-center text-red-500">{errors}</p>

  </div>
  )
}

function handleDelete(postId) {

  fetch(`http://localhost:3000/posts/${postId}` , {
    method:"DELETE"
  })
  .then(response => {
    if(!response.ok) throw new Error("failed to delte post")
      setPosts(prev => prev.filter(post => post.id =! postId))
  })
}


  return (
      <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
      Blog Posts
    </h1>

    <div className="max-w-7xl mx-auto flex gap-8">
      
     <div className="w-93">
      <AddPost
      onAdd = {handleAdd}
      />
     </div>

      {/* RIGHT SIDE - POSTS */}
      <div className="flex-1 grid md:grid-cols-2 gap-6">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onReadMore = {() =>setSelectedPostId(post.id)}
            onDelete  = {() => handleDelete(post.id)}
          />
        ))}
      </div>
 
    </div>
  </div>
  );
}
