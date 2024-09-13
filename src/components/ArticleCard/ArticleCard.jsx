import { Link } from "react-router-dom";

const ArticleCard = ({ post }) => {
  const { _id, title, content, imgUrl } = post;
  return (
    <div
      // href="https://github.com/coderismail22"
      target="_blank"
    >
      <div className="p-5 bg-slate-100 rounded-md">
        {/* Image */}
        <div>
          <img src={imgUrl} alt="articleImg" className="my-5 w-full max-h-[300px] object-cover" />
        </div>
        {/* Title */}
        <h1 className="font-serif font-extrabold text-2xl">{title}</h1>
        {/* Description */}
        <p dangerouslySetInnerHTML={{ __html: content.substring(0, 100) + (content.length > 100 ? '...' : '') }} className="text-gray-600 text-sm md:text-base mb-4"></p>
        {/* Button */}
        <Link to={`/blogs/${_id}`} className="font-serif font-extrabold text-sm">Read more </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
