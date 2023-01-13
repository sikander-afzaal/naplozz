import { Link } from "react-router-dom";

const BlogCard = ({ img, head, desc, date }) => {
  return (
    <Link
      to={`/blog/${head}`}
      className="no-underline w-full h-full max-w-full  flex justify-start items-start flex-col gap-3 bg-[#05050f] rounded-[10px] overflow-hidden"
    >
      <img src={img} className="w-full object-cover h-[280px]" alt="" />
      <div className="flex justify-start items-start flex-col p-5 w-full gap-2">
        <h3 className="text-white text-lg sm:text-2xl font-bold">{head}</h3>
        <p className="text-base sm:text-xl text-[#b3b3b3]">{desc}</p>
        <div className="w-full justify-between flex items-center gap-1">
          <img
            src="/full-logo.png"
            className="w-full max-w-[100px] object-contain"
            alt=""
          />
          <p className="text-[#ff519f] text-sm sm:text-xl">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
