import { Link } from "react-router-dom";

const BlogCard = ({ img, head, desc, date, id }) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="no-underline w-full h-full max-w-full  flex justify-start items-start flex-col gap-3 bg-[#05050f] rounded-[10px] overflow-hidden"
    >
      <img
        src={img}
        className="w-full object-cover min-h-[280px] man-h-[280px]"
        alt=""
      />
      <div className="flex justify-between  items-start h-full flex-col p-5 w-full gap-4">
        <div className="flex justify-start items-start flex-col gap-2">
          <h3 className="text-white text-lg sm:text-2xl font-bold">{head}</h3>
          <p className="text-base sm:text-xl text-[#b3b3b3]">{desc}</p>
        </div>
        <div className="w-full justify-between flex items-center gap-1">
          <svg
            width="100"
            height="31"
            viewBox="0 0 131 31"
            fill="none"
            className="w-[131px] object-contain"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.6468 19.4993L20.6449 19.5013H12.3971L12.3893 19.4876L16.5132 12.9669H16.519L20.6468 19.4993Z"
              fill="url(#paint0_linear_917_428)"
            />
            <path
              d="M16.6267 0L12.3853 6.42471L8.25754 12.9493L8.24775 12.9669H0.019582L0 12.9375L4.12583 6.41296L8.18313 0H16.6267Z"
              fill="url(#paint1_linear_917_428)"
            />
            <path
              d="M12.3893 19.4876L12.3795 19.5013H4.14744L4.13178 19.4739L0.0196533 12.9669H8.26936L12.3893 19.4876Z"
              fill="url(#paint2_linear_917_428)"
            />
            <path
              d="M24.8763 0L20.6682 6.39534L16.6266 0L12.3852 6.42471L8.25745 12.9493L8.2692 12.9669L12.3892 19.4876L16.513 12.9669L16.515 12.963L16.5189 12.9669L20.6467 19.4993L24.7999 12.9336L28.9258 6.40904L24.8763 0Z"
              fill="url(#paint3_linear_917_428)"
            />
            <path
              d="M121.3 9.02014C120.206 9.02014 119.497 9.68528 119.497 10.5642C119.497 11.3171 120.111 11.9055 121.099 11.9055C122.193 11.9055 122.902 11.2531 122.902 10.312C122.902 9.5592 122.289 9.02014 121.3 9.02014Z"
              fill="white"
            />
            <path
              d="M118.021 19.3244H120.837L122.2 12.4611H119.384L118.021 19.3244Z"
              fill="white"
            />
            <path
              d="M115.205 16.5469C114.111 16.5469 113.402 17.212 113.402 18.0909C113.402 18.8438 114.016 19.4322 115.004 19.4322C116.098 19.4322 116.807 18.7798 116.807 17.8388C116.807 17.0859 116.192 16.5469 115.205 16.5469Z"
              fill="white"
            />
            <path
              d="M127.284 12.335C124.792 12.335 123.015 14.0161 123.015 16.2746C123.015 18.1951 124.473 19.4487 126.731 19.4487C129.223 19.4487 131 17.7675 131 15.509C131 13.5885 129.542 12.335 127.284 12.335ZM126.895 17.2157C126.256 17.2157 125.88 16.7771 125.88 16.1358C125.88 15.1837 126.381 14.5679 127.12 14.5679C127.758 14.5679 128.133 15.0065 128.133 15.6479C128.133 16.5999 127.634 17.2157 126.895 17.2157Z"
              fill="white"
            />
            <path
              d="M48.9754 8.89966L42.2806 19.4359H46.019L47.0688 17.6086H51.0788L51.4251 19.4359H54.952L52.4585 8.89966H48.9754ZM48.5252 15.0394L50.0708 12.346L50.5812 15.0394H48.5252Z"
              fill="white"
            />
            <path
              d="M63.0409 8.89966H58.3712L56.2697 19.4359H59.813L60.3233 16.8484H62.146C65.3722 16.8484 67.4591 15.0577 67.4591 12.3935C67.4591 10.2007 65.8679 8.90331 63.0464 8.90331M62.3173 14.1093H60.8592L61.3531 11.6406H62.5397C63.3508 11.6406 63.8611 11.9567 63.8611 12.7096C63.8611 13.5977 63.2906 14.1093 62.3137 14.1093"
              fill="white"
            />
            <path
              d="M73.6674 8.89966H70.1241L68.0226 19.4341H76.3085L76.8644 16.6803H72.1218L73.6674 8.89966Z"
              fill="white"
            />
            <path
              d="M85.0901 8.65466C81.2333 8.65466 78.4701 11.2421 78.4701 14.9589C78.4701 17.7291 80.5279 19.6697 83.7996 19.6697C87.6564 19.6697 90.4196 17.0822 90.4196 13.3655C90.4196 10.5953 88.3636 8.65466 85.0901 8.65466ZM84.1004 16.799C82.8081 16.799 82.0426 15.9712 82.0426 14.7524C82.0426 13.0219 83.0487 11.5327 84.7912 11.5327C86.0816 11.5327 86.8472 12.3604 86.8472 13.5793C86.8472 15.3097 85.841 16.799 84.1004 16.799Z"
              fill="white"
            />
            <path
              d="M101.992 11.0815L102.428 8.89966H93.1647L92.6106 11.6534H97.1728L91.3493 17.2505L90.9137 19.4341H100.565L101.121 16.6803H96.1667L101.992 11.0815Z"
              fill="white"
            />
            <path
              d="M113.489 8.89966H104.228L103.672 11.6534H108.236L102.411 17.2505L101.975 19.4341H111.628L112.183 16.6803H107.23L113.054 11.0815L113.489 8.89966Z"
              fill="white"
            />
            <path
              d="M41.7283 9.11145L38.6873 13.9833L37.6887 9.11145H34.7436L28.2092 19.57H31.7006L34.7416 14.7L35.7403 19.5719H38.6854L45.2197 9.11145H41.7283Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_917_428"
                x1="12.3893"
                y1="16.2351"
                x2="20.6468"
                y2="16.2351"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.23" stopColor="#003345" stopOpacity="0.27" />
                <stop offset="0.51" stopColor="#016E93" stopOpacity="0.58" />
                <stop offset="0.74" stopColor="#0199CC" stopOpacity="0.81" />
                <stop offset="0.91" stopColor="#01B3F0" stopOpacity="0.95" />
                <stop offset="1" stopColor="#01BDFD" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_917_428"
                x1="4.21787"
                y1="3.92414"
                x2="11.4004"
                y2="8.40049"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.23" stopColor="#003345" stopOpacity="0.27" />
                <stop offset="0.51" stopColor="#016E93" stopOpacity="0.58" />
                <stop offset="0.74" stopColor="#0199CC" stopOpacity="0.81" />
                <stop offset="0.91" stopColor="#01B3F0" stopOpacity="0.95" />
                <stop offset="1" stopColor="#01BDFD" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_917_428"
                x1="1.68996"
                y1="18.158"
                x2="9.10745"
                y2="14.9936"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.23" stopColor="#003345" stopOpacity="0.27" />
                <stop offset="0.51" stopColor="#016E93" stopOpacity="0.58" />
                <stop offset="0.74" stopColor="#0199CC" stopOpacity="0.81" />
                <stop offset="0.91" stopColor="#01B3F0" stopOpacity="0.95" />
                <stop offset="1" stopColor="#01BDFD" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_917_428"
                x1="11.3787"
                y1="19.6011"
                x2="24.8117"
                y2="1.36875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#33FDFF" />
                <stop offset="1" stopColor="#424CFF" />
              </linearGradient>
            </defs>
          </svg>

          <p className="text-lightPink text-sm sm:text-xl">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
