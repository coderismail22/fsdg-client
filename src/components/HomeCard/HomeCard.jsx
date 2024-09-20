import { Link } from "react-router-dom";

const HomeCard = ({ post }) => {
  const { _id, imgUrl, title, content } = post;
  return (
    <div className="font-notoserifbangla grid gap-5 md:grid-cols-2 justify-center items-center  md:flex-row md:col-span-2 p-5">
      {/* Image */}
      <div className="col-span-1">
        <img
          src={imgUrl}
          alt="Image"
          className="w-[100%] h-[300px] object-cover object-center"
        />
      </div>

      <div className="col-span-1 bg-slate-100 md:bg-white rounded-md p-5 text-center md:text-left ">
        {/* Text */}
        <h1 className=" font-extrabold text-[#2C5B1A] text-3xl  mb-3">
          {title}
        </h1>
        <p dangerouslySetInnerHTML={{ __html: content.substring(0, 300) + (content.length > 100 ? '...' : '') }} className="text-gray-600 text-sm md:text-base mb-4"></p>
        {/* Button */}
        <Link to={`/blogs/${_id}`} className=" font-extrabold text-sm">Read more </Link>
      </div>
    </div >
  );
};

export default HomeCard;
