import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-center text-4xl my-3">Latest Blogs</h2>
      <p className="text-center w-2/4 m-auto">
        Discover What’s New in the World of Ideas and Innovation
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs.slice(0, 3).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 my-5">
        {blogs.slice(3, 6).map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
