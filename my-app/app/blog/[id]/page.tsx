"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function BlogDetail() {

  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!blog) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow">

        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />

        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <p className="text-gray-500 mb-6">
          Category: {blog.category}
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          {blog.description}
        </p>

        <div className="mt-8 border-t pt-6">
          <p className="text-sm text-gray-500">
            Price: ${blog.price}
          </p>

          <p className="text-sm text-gray-500">
            Rating: {blog.rating}
          </p>

          <p className="text-sm text-gray-500">
            Stock: {blog.stock}
          </p>
        </div>

      </div>
    </main>
  );
}