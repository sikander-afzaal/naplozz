import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { name } = useParams();
  const descStyles = `text-white font-medium text-lg leading-[1.5] sm:text-xl`;
  return (
    <div className="wrapper mt-[110px] md:mt-[130px]">
      <div className="contain flex-col justify-start items-center sm:items-start gap-4">
        <Link to={"/blogs"}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-white self-start text-2xl cursor-pointer -mb-4"
          />
        </Link>
        <div className="text-center sm:text-left">
          <h2 className="gr-text text-[40px] sm:text-[50px] md:text-[72px] font-bold">
            {name}
          </h2>
          <h4 className="text-[#ff519f] text-base font-medium">
            23rd December 2022
          </h4>
        </div>
        <img
          src="/blogs/hero-bg.png"
          className="w-full max-h-[600px] my-3 object-cover"
          alt=""
        />
        <p className={descStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta
          placeat, molestias doloremque rem necessitatibus deserunt quae
          architecto omnis mollitia. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fuga dicta placeat, molestias doloremque rem
          necessitatibus deserunt quae architecto omnis mollitia. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Fuga dicta placeat,
          molestias doloremque rem necessitatibus deserunt quae architecto omnis
          mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga dicta placeat, molestias doloremque rem necessitatibus deserunt
          quae architecto omnis mollitia.
        </p>
        <p className={descStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta
          placeat, molestias doloremque rem necessitatibus deserunt quae
          architecto omnis mollitia. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fuga dicta placeat, molestias doloremque rem
          necessitatibus deserunt quae architecto omnis mollitia. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Fuga dicta placeat,
          molestias doloremque rem necessitatibus deserunt quae architecto omnis
          mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga dicta placeat, molestias doloremque rem necessitatibus deserunt
          quae architecto omnis mollitia.
        </p>
        <p className={descStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta
          placeat, molestias doloremque rem necessitatibus deserunt quae
          architecto omnis mollitia. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fuga dicta placeat, molestias doloremque rem
          necessitatibus deserunt quae architecto omnis mollitia. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Fuga dicta placeat,
          molestias doloremque rem necessitatibus deserunt quae architecto omnis
          mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga dicta placeat, molestias doloremque rem necessitatibus deserunt
          quae architecto omnis mollitia.
        </p>
        <p className={descStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta
          placeat, molestias doloremque rem necessitatibus deserunt quae
          architecto omnis mollitia. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fuga dicta placeat, molestias doloremque rem
          necessitatibus deserunt quae architecto omnis mollitia. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Fuga dicta placeat,
          molestias doloremque rem necessitatibus deserunt quae architecto omnis
          mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga dicta placeat, molestias doloremque rem necessitatibus deserunt
          quae architecto omnis mollitia.
        </p>
        <p className={descStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta
          placeat, molestias doloremque rem necessitatibus deserunt quae
          architecto omnis mollitia. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fuga dicta placeat, molestias doloremque rem
          necessitatibus deserunt quae architecto omnis mollitia. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Fuga dicta placeat,
          molestias doloremque rem necessitatibus deserunt quae architecto omnis
          mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga dicta placeat, molestias doloremque rem necessitatibus deserunt
          quae architecto omnis mollitia.
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
