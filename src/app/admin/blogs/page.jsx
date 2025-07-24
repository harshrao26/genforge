"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaEye, FaTrashAlt, FaEdit, FaPlus, FaUserEdit } from "react-icons/fa";
import {
  MdOutlineDateRange,
  MdPostAdd,
  MdComment,
  MdFavorite,
} from "react-icons/md";
import Image from "next/image";
import logo from "@/assets/logo.png";
export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await fetch("/api/blogs");
    const data = await res.json();
    console.log(data);
    if (data.success) setBlogs(data.blogs);
  };

  const handleDelete = async (slug) => {
    if (!confirm("Delete this blog?")) return;
    const res = await fetch(`/api/blogs/${slug}`, {
      method: "DELETE",
    });
    if (res.ok) {
      alert("Deleted");
      setBlogs(blogs.filter((b) => b.urlSlug !== slug));
    } else {
      const error = await res.json();
      alert("Error deleting: " + error?.error || "Unknown error");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Welcome Header */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-3xl font-medium text-gray-800">
            Welcome Back! Harsh 👋
          </h2>
          <p className="text-gray-500">Manage your blog posts with ease</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={logo} alt="welcome" className="w-20" />
          <span className="text-4xl font- "> </span>
        </div>
      </div>

       

      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">All Blog Posts</h1>
        <Link
          href="/admin/blogs/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700"
        >
          <FaPlus />
          Add New Blog
        </Link>
      </div>

      {/* Blog Cards Grid */}
      {blogs.length === 0 ? (
        <p className="text-gray-600">No blogs available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            // <Link href={`/blogs/by-id/${blog._id}`} key={blog._id}>
              <div
                key={blog._id}
                className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden"
              >
                 <img
                  src={blog.image || "/placeholder.png"}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-xs uppercase text-blue-600 font-medium">
                    {blog.category || "General"}
                  </span>
                  <h2 className="text-lg font-bold text-gray-800 mt-1 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {blog.description?.slice(0, 100) || "No description"}...
                  </p>

                  <div className="flex justify-between text-xs text-gray-500 mt-4">
                    <span className="flex items-center gap-1">
                      <MdOutlineDateRange />
                      {new Date(blog.updatedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-4 border-t pt-3">
                    <span className="text-sm text-gray-700 font-medium">
                      {blog.author || "Unknown"}
                    </span>
                    <div className="flex gap-3">
                      <Link
                        href={`/admin/blogs/${blog.urlSlug}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.urlSlug)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            // </Link>
          ))}
        </div>
      )}
    </div>
  );
}
