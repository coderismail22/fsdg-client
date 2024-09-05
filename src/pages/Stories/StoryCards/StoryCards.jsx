import StoryCard from "../../../components/StoryCard/StoryCard";

const StoryCards = () => {
  const stories = [
    {
      id: 1,
      highlightedBar:
        " Life Project | In Partnership With IC-NET | Funded by Jica",
      title:
        "From Goats to Pigs: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
      author: "CNRS",
      postDate: "Published On August 20, 2024",
      imgUrl:
        "https://cnrs.org.bd/wp-content/uploads/2024/08/Screenshot-2024-08-20-123804-768x509.png",
      description:
        "Painnocing Chakma, among the beneficiaries in her community, she has greatly benefitted from the LIFE’s goat bank activities. A 37-year-old farmer from Telkhola, Painnocing represents those the LIFE project aims to assist individuals facing difficulties in maintaining their livelihoods.",
      postUrl:
        "https://cnrs.org.bd/2024/08/20/from-goats-to-pigs-painnocing-chakmas-path-to-prosperity-with-the-life-project/",
    },
    {
      id: 2,
      highlightedBar: " Suchana Project",
      title:
        "From Goats to Pigs: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
      author: "CNRS",
      postDate: "Published On September 25, 2022",
      imgUrl:
        "https://cnrs.org.bd/wp-content/uploads/2024/08/Screenshot-2024-08-20-123804-768x509.png",
      description:
        "when they became beneficiaries of the LIFE project. Through attending goat-rearing trainings and agriculture production trainings. Khaleda learned important skills in goat rearing and crop production. She discovered the importance of proper feeding techniques and practices, along with goat bed…",
      postUrl:
        "https://cnrs.org.bd/2024/08/20/empowering-through-goat-bank-activities-and-beyond/",
    },
    {
      id: 3,
      highlightedBar:
        " Life Project | In Partnership With IC-NET | Funded by Jica",
      title:
        "From Goats to Pigs: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
      author: "CNRS",
      postDate: "Published On August 20, 2024",
      imgUrl:
        "https://cnrs.org.bd/wp-content/uploads/2024/08/Screenshot-2024-08-20-123804-768x509.png",
      description:
        "Painnocing Chakma, among the beneficiaries in her community, she has greatly benefitted from the LIFE’s goat bank activities. A 37-year-old farmer from Telkhola, Painnocing represents those the LIFE project aims to assist individuals facing difficulties in maintaining their livelihoods.",
      postUrl:
        "https://cnrs.org.bd/2024/08/20/from-goats-to-pigs-painnocing-chakmas-path-to-prosperity-with-the-life-project/",
    },
    {
      id: 4,
      highlightedBar: " Suchana Project",
      title:
        "From Goats to Pigs: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
      author: "CNRS",
      postDate: "Published On September 25, 2022",
      imgUrl:
        "https://cnrs.org.bd/wp-content/uploads/2024/08/Screenshot-2024-08-20-123804-768x509.png",
      description:
        "when they became beneficiaries of the LIFE project. Through attending goat-rearing trainings and agriculture production trainings. Khaleda learned important skills in goat rearing and crop production. She discovered the importance of proper feeding techniques and practices, along with goat bed…",
      postUrl:
        "https://cnrs.org.bd/2024/08/20/empowering-through-goat-bank-activities-and-beyond/",
    },
    {
      id: 5,
      highlightedBar:
        " Life Project | In Partnership With IC-NET | Funded by Jica",
      title:
        "From Goats to Pigs: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
      author: "CNRS",
      postDate: "Published On August 20, 2024",
      imgUrl:
        "https://cnrs.org.bd/wp-content/uploads/2024/08/Screenshot-2024-08-20-123804-768x509.png",
      description:
        "Painnocing Chakma, among the beneficiaries in her community, she has greatly benefitted from the LIFE’s goat bank activities. A 37-year-old farmer from Telkhola, Painnocing represents those the LIFE project aims to assist individuals facing difficulties in maintaining their livelihoods.",
      postUrl:
        "https://cnrs.org.bd/2024/08/20/from-goats-to-pigs-painnocing-chakmas-path-to-prosperity-with-the-life-project/",
    },
    {
      id: 6,
      highlightedBar: " Suchana Project",
      title:
        "From Goats to Pigs: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
      author: "CNRS",
      postDate: "Published On September 25, 2022",
      imgUrl:
        "https://cnrs.org.bd/wp-content/uploads/2024/08/Screenshot-2024-08-20-123804-768x509.png",
      description:
        "when they became beneficiaries of the LIFE project. Through attending goat-rearing trainings and agriculture production trainings. Khaleda learned important skills in goat rearing and crop production. She discovered the importance of proper feeding techniques and practices, along with goat bed…",
      postUrl:
        "https://cnrs.org.bd/2024/08/20/empowering-through-goat-bank-activities-and-beyond/",
    },
    {
      id: 7,
      highlightedBar:
        " Life Project | In Partnership With IC-NET | Funded by Jica",
      title:
        "From Goats to Pigs: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
      author: "CNRS",
      postDate: "Published On August 20, 2024",
      imgUrl:
        "https://cnrs.org.bd/wp-content/uploads/2024/08/Screenshot-2024-08-20-123804-768x509.png",
      description:
        "Painnocing Chakma, among the beneficiaries in her community, she has greatly benefitted from the LIFE’s goat bank activities. A 37-year-old farmer from Telkhola, Painnocing represents those the LIFE project aims to assist individuals facing difficulties in maintaining their livelihoods.",
      postUrl:
        "https://cnrs.org.bd/2024/08/20/from-goats-to-pigs-painnocing-chakmas-path-to-prosperity-with-the-life-project/",
    },
    {
      id: 8,
      highlightedBar: " Suchana Project",
      title:
        "From Goats to Pigs: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
      author: "CNRS",
      postDate: "Published On September 25, 2022",
      imgUrl:
        "https://cnrs.org.bd/wp-content/uploads/2024/08/Screenshot-2024-08-20-123804-768x509.png",
      description:
        "when they became beneficiaries of the LIFE project. Through attending goat-rearing trainings and agriculture production trainings. Khaleda learned important skills in goat rearing and crop production. She discovered the importance of proper feeding techniques and practices, along with goat bed…",
      postUrl:
        "https://cnrs.org.bd/2024/08/20/empowering-through-goat-bank-activities-and-beyond/",
    },
    {
      id: 9,
      highlightedBar:
        " Life Project | In Partnership With IC-NET | Funded by Jica",
      title:
        "From Goats to Pigs: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
      author: "CNRS",
      postDate: "Published On August 20, 2024",
      imgUrl:
        "https://cnrs.org.bd/wp-content/uploads/2024/08/Screenshot-2024-08-20-123804-768x509.png",
      description:
        "Painnocing Chakma, among the beneficiaries in her community, she has greatly benefitted from the LIFE’s goat bank activities. A 37-year-old farmer from Telkhola, Painnocing represents those the LIFE project aims to assist individuals facing difficulties in maintaining their livelihoods.",
      postUrl:
        "https://cnrs.org.bd/2024/08/20/from-goats-to-pigs-painnocing-chakmas-path-to-prosperity-with-the-life-project/",
    },
    {
      id: 10,
      highlightedBar: " Suchana Project",
      title:
        "From Goats to Pigs: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
      author: "CNRS",
      postDate: "Published On September 25, 2022",
      imgUrl:
        "https://cnrs.org.bd/wp-content/uploads/2024/08/Screenshot-2024-08-20-123804-768x509.png",
      description:
        "when they became beneficiaries of the LIFE project. Through attending goat-rearing trainings and agriculture production trainings. Khaleda learned important skills in goat rearing and crop production. She discovered the importance of proper feeding techniques and practices, along with goat bed…",
      postUrl:
        "https://cnrs.org.bd/2024/08/20/empowering-through-goat-bank-activities-and-beyond/",
    },
    {
      id: 11,
      highlightedBar:
        " Life Project | In Partnership With IC-NET | Funded by Jica",
      title:
        "From Goats to Pigs: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
      author: "CNRS",
      postDate: "Published On August 20, 2024",
      imgUrl:
        "https://cnrs.org.bd/wp-content/uploads/2024/08/Screenshot-2024-08-20-123804-768x509.png",
      description:
        "Painnocing Chakma, among the beneficiaries in her community, she has greatly benefitted from the LIFE’s goat bank activities. A 37-year-old farmer from Telkhola, Painnocing represents those the LIFE project aims to assist individuals facing difficulties in maintaining their livelihoods.",
      postUrl:
        "https://cnrs.org.bd/2024/08/20/from-goats-to-pigs-painnocing-chakmas-path-to-prosperity-with-the-life-project/",
    },
    {
      id: 12,
      highlightedBar: " Suchana Project",
      title:
        "From Goats to Pigs: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
      author: "CNRS",
      postDate: "Published On September 25, 2022",
      imgUrl:
        "https://cnrs.org.bd/wp-content/uploads/2024/08/Screenshot-2024-08-20-123804-768x509.png",
      description:
        "when they became beneficiaries of the LIFE project. Through attending goat-rearing trainings and agriculture production trainings. Khaleda learned important skills in goat rearing and crop production. She discovered the importance of proper feeding techniques and practices, along with goat bed…",
      postUrl:
        "https://cnrs.org.bd/2024/08/20/empowering-through-goat-bank-activities-and-beyond/",
    },
  ];
  return (
    <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10 ">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoryCards;
