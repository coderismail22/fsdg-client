import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WhatWeDoCard1 = ({ imageUrl, title, itemLink, borderRight }) => {
  return (
    <div
      className={`border-${borderRight} w-[100%] sm:w-[500px] md:w-[230px] lg:w-[320px]  h-[550px] md:h-[400px]  p-5  flex flex-col items-center justify-center`}
    >
      <div>
        <img
          className="w-[500px] md:w-[200px] lg:w-[300px]  h-[400px] md:h-[150px] lg:h-[200px] object-cover object-center"
          src={imageUrl}
          alt="Image"
        />
      </div>
      <div className="md:w-[200px] h-[80px] md:h-[100px]">
        <h1 className=" font-palanquin font-bold text-[#2C5B1A] text-[20px] md:text-[18px] text-center my-2">
          {title}
        </h1>
      </div>
      <div className="flex gap-2 items-center justify-center bg-[#FFCD05] text-white w-[200px] p-3 ">
        <Link to={itemLink} className="font-palanquin">
          Read More
        </Link>
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default WhatWeDoCard1;
