"use client";

import { useState } from "react";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [pending, setPending] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPending(true);

    const blogData = {
      title,
      author,
      description,
      image,
    };

    console.log(blogData); // for now we just print it
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create Blog</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Title */}
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />

        {/* Author */}
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2 rounded"
        />

        {/* Description */}
        <textarea
          placeholder="Blog Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />

        {/* Image URL */}
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 rounded"
        />

       {!pending ?
        <h1>Please wait...</h1> :
        <button
          type="submit"
          className="bg-black text-white py-2 rounded"
          disabled={pending}
        >
          Submit
        </button> 
       }
        
      </form>
    </div>
  );
}