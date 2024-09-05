import { useState } from "react";
import { Link } from "react-router-dom";
import { FaImage } from "react-icons/fa6";

const ProjectCard = ({ cardData }) => {
  const { imgUrl, title, clientDonorInfo, budget, mainFocus } = cardData;
  console.log(imgUrl, title, clientDonorInfo, budget, mainFocus);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full h-full mx-auto max-w-[400px] flex flex-col items-center justify-between p-2 bg-blue-50 ">
      {/* Card Image */}
      <div className="h-[200px]">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 border border-dashed border-gray-400 rounded-lg shadow-md">
            <FaImage className="size-20 mt-10" />
            <p className="text-2xl text-gray-500 text-center font-medium p-10 ">
              Image Not Available
            </p>
          </div>
        ) : (
          <img
            className="w-full h-full object-cover rounded-lg shadow-md"
            src={imgUrl}
            alt="Project Image"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      {/* Card Details */}
      <div className="w-full mt-3 flex flex-col items-center">
        {/* Title */}
        <h1 className="font-montserrat font-bold text-[20px] md:text-[18px] text-center my-2 ">
          {title}
        </h1>
      </div>
      {/* Description */}
      <div className="text-center my-3 text-[#687279] text-sm w-full">
        <p>
          <span className="text-[#687279] font-bold">Client/Donor: </span>
          {clientDonorInfo}
        </p>
        <p>
          <span className="text-[#687279] font-bold">Budget: </span>
          {budget}
        </p>
        <p className="mt-5 text-center">
          <span className="text-[#687279] font-bold ">
            Main Focus of The Project:
          </span>
          {mainFocus}
        </p>
      </div>
      <Link
        to="/contact"
        className="font-montserrat  flex gap-5 items-center justify-center text-xl bg-[#FFCD05]  w-[300px] h-[50px] p-2 mt-5"
      >
        Contact for more
      </Link>
    </div>
  );
};

export default ProjectCard;
