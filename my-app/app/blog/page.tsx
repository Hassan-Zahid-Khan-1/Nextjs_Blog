"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="bg-white border border-stone-200 rounded-xl p-4 hover:shadow">
        <h3 className="text-lg font-bold">{blog.title}</h3>
        <p className="text-sm text-gray-500 mt-2">{blog.description}</p>
      </div>
    </Link>
  );
}

export default function BlogPage() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setBlogs(data.products))
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>

      <div className="grid grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

    </main>
  );
}