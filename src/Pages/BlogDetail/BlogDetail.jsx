import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DATA from "./data";

const BlogDetail = () => {
  const { id } = useParams();
  const descStyles = `text-white font-medium text-lg leading-[1.5] sm:text-xl`;
  return (
    <div className="wrapper mt-[110px] md:mt-[130px]">
      <div className="contain flex-col justify-start items-center sm:items-start gap-4">
        <Link to={"/blogs"} className="self-start mb-5">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-white  text-2xl cursor-pointer -mb-4"
          />
        </Link>
        <div className="text-center sm:text-left">
          <h2 className="gr-text text-[24px] sm:text-[30px] md:text-[42px] font-bold">
            {DATA[id].heading}
          </h2>
          <h4 className="text-[#ff519f] text-base font-medium">
            {DATA[id].date}
          </h4>
        </div>
        <img
          src={DATA[id].img}
          className="w-full max-h-[600px] my-3 object-cover"
          alt=""
        />
        <div className="flex justify-start items-start flex-col gap-10">
          {DATA[id].details.map((elem) => {
            return (
              <div
                id={elem.head}
                className="flex justify-start items-start flex-col gap-3"
              >
                <h4 className="text-white font-bold text-2xl">{elem.head}</h4>
                {elem.para.map((elem, idx) => {
                  return (
                    <p id={elem} className={descStyles}>
                      {elem}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
