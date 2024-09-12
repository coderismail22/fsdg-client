import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WhatWeDoCard2 = ({
  id,
  imgUrl,
  title,
  borderTop,
  borderRight,
}) => {
  return (
    <div
      className={`bg-slate-100 rounded-md border-${borderTop} border-${borderRight} w-full sm:w-[500px] md:w-[160px] lg:w-[240px]  h-[550px] md:h-[400px]  p-5 md:p-2  flex flex-col items-center justify-center`}
    >
      <div>
        <img
          className="border-t w-[600px] md:w-[200px] lg:w-[300px]  h-[400px] md:h-[150px] lg:h-[200px] object-cover object-center"
          src={imgUrl}
          alt="Image"
        />
      </div>
      <div className="md:w-[200px] h-[80px] md:h-[100px]">
        <h1 className=" font-palanquin font-bold text-[#2C5B1A] text-[20px] md:text-[18px] text-center my-2">
          {title}
        </h1>
      </div>
      <Link to={`/blogs/${id}`} className="font-palanquin flex gap-2 items-center justify-center bg-[#FFCD05] hover:bg-[#f5d65b] text-white w-[150px] rounded-lg p-3 ">
        Read More
        <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default WhatWeDoCard2;
