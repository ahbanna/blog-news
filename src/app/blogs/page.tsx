// Using SSR

// import BlogCard from "@/components/ui/BlogCard";
// import { Blog } from "@/types";
// import React from "react";

// const BlogsPage = async () => {
//   const res = await fetch("http://localhost:5000/blogs", {
//     cache: "no-store",
//   });
//   const blogs = await res.json();
//   // console.log(blogs);
//   return (
//     <div className="w-[90%] mx-auto">
//       <h2 className="text-4xl text-center my-4">All Blogs</h2>
//       <p className="text-center w-2/4 m-auto">
//         Explore All Topics, Stories, and Insights
//       </p>
//       <div className="grid grid-cols-4 gap-4 my-5">
//         {blogs.map((blog: Blog) => (
//           <BlogCard key={blog.id} blog={blog}></BlogCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogsPage;

// Using Redux
"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";
import React from "react";

const BlogsPage = () => {
  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");
  // console.log(blogs);
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-4xl text-center my-4">All Blogs</h2>
      <p className="text-center w-2/4 m-auto">
        Explore All Topics, Stories, and Insights
      </p>
      <div className="grid grid-cols-4 gap-4 my-5">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
