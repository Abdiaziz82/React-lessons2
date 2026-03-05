import { useState } from "react";

export default function AddPost({onAdd}) {

const[formData, setFormData] = useState({
  userId:"",
  title: "",
  body: "",
 imageUrl : ""
})

const[loading ,setLoading] = useState(true)
const handleChange = (e) => {
setFormData({
  ...formData,
  [e.target.name] :e.target.value
  
})
}

const handleSubmit = (e) => {
  e.preventDefault(); // prevent default refresh
  //validation
if(!formData.userId || !formData.title || !formData.body || !formData.imageUrl) {
  alert("ensure there is no empty field ")
  return
}

//clear the loading
setLoading(false)

//requesting the server to process the post request
fetch("http://localhost:3000/posts" , {
  method:"POST",
  headers : {
    "Content_Type" :"application/json"
  },
  body:JSON.stringify({
    ...formData,
    userId: Number(formData.userId)
  })
})
.then(res => res.json())
.then((data) => {
  onAdd(data)
  console.log(data)

  //clear the form 
  setFormData({
    userId:"",
    title:"",
    body : "",
    imageUrl :""
  })
  setLoading(false)
})

//catch possible errors
.catch(err => {
  console.log(err)
})
}


  return (
    <div className="bg-white p-6 rounded-2xl shadow-md sticky top-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Post</h2>

      <form onSubmit={handleSubmit}  className="space-y-4">
        <input
          type="number"
          name="userId"
          placeholder="User ID"
          value = {formData.userId}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg"
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg"
        />

        <textarea
          name="body"
          placeholder="Post body"
          value={formData.body}
           onChange={handleChange}
          className="w-full border p-2 rounded-lg"
          rows="4"
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
           onChange={handleChange}
          className="w-full border p-2 rounded-lg"
        />

        <button
          type="submit"
          disabled= {!loading}
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
         {loading ? "Add Post" :"Adding post......."}
        </button>
      </form>
    </div>
  );
}