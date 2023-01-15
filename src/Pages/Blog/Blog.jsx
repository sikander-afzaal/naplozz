import AllBlogs from "./AllBlogs";
import Hero from "./Hero";

const Blog = ({ loader }) => {
  return (
    <div>
      <Hero loader={loader} />
      <AllBlogs />
    </div>
  );
};

export default Blog;
