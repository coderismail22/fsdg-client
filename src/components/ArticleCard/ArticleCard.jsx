const ArticleCard = ({ post }) => {
  const { title, content, imgUrl } = post;
  return (
    <div
      // href="https://github.com/coderismail22"
      target="_blank"
      className="block pointer-events-none"
    >
      <div className="p-5">
        {/* Image */}
        <div>
          <img src={imgUrl} alt="articleImg" className="my-5 w-full h-[px] object-cover" />
        </div>
        {/* Title */}
        <h1 className="font-serif font-extrabold text-2xl">{title}</h1>
        {/* Description */}
        <p className="my-5" dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
    </div>
  );
};

export default ArticleCard;
