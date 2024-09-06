import ArticleCard from "../../../components/ArticleCard/ArticleCard";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Waste Management Project",
      description:
        "In the reporting period, FSDG started a new waste management project at Kanchan-1 Drilling Site, Maheshkhali, Cox&apos;s Bazar, with the support of Sinopec International Petroleum Service Corporation.",
      imgUrl: "/assets/article_1.jpg",
      pageUrl: "",
    },
    {
      id: 2,
      title: "Bacterial Waste Water Treatment",
      description:
        "In the reporting period, FSDG started a new waste management project at Kanchan-1 Drilling Site, Maheshkhali, Cox&apos;s Bazar, with the support of Sinopec International Petroleum Service Corporation.",
      imgUrl: "/assets/article_2.jpg",
      pageUrl: "",
    },
    {
      id: 3,
      title: "Multipurpose Center",
      description:
        "In the reporting period, FSDG started a new waste management project at Kanchan-1 Drilling Site, Maheshkhali, Cox&apos;s Bazar, with the support of Sinopec International Petroleum Service Corporation.",
      imgUrl: "/assets/article_3.jpg",
      pageUrl: "",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white py-16">
      <h1 className="font-palanquin text-3xl font-extrabold text-white text-center">
        Read articles and case stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-16 my-20">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
