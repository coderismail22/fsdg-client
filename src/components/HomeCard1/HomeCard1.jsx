import { FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeCard1 = () => {
  return (
    <div>
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 gap-5 p-5">
        <div className="order-1 md:order-2 md:col-span-1">
          <img
            src="/assets/overlay-bg.jpg"
            alt="birds"
            className="w-[1000px] h-[500px] object-cover object-center rounded-md"
          />
        </div>
        <div className="md:col-span-1 order-2 md:order-1  bg-slate-100 rounded-md p-5 text-left flex flex-col md:justify-center md:items-center ">
          <div className="w-full  p-5">
            {/* Text */}
            <h1 className="font-yeseva font-extrabold text-black text-4xl  mb-5">
              FSDG
            </h1>
            <p className="font-lato text-[20px] text-grey-800  mb-8">

            FSDG (Foundation for Supporting Development Goals) is a Non-government Organization (NGO) registered under Joint Stock Company, Bangladesh in 2016. FSDG has been working to support the most marginalized population in Mymensingh, Barisal, Jhalkati and Panchagarh with safe water, shelter and agriculture.
            </p>
            {/* Link: Find Out More */}
            <p className="flex gap-5 items-center ">
              <p className="flex justify-center items-center bg-[#FFCD05] rounded-full w-16 h-16">
                <FaAlignLeft className="size-12 text-white  p-2" />
              </p>
              <Link to='/about' className="font-extrabold text-xl ">Read More</Link>
            </p>
          </div>
        </div>
        {/* Image */}
      </div>
    </div>
  );
};

export default HomeCard1;
