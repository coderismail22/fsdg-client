import { motion } from "framer-motion";
import { useState } from "react";
import MiniCaseStoryCard from "../MiniCaseStoryCard/MiniCaseStoryCard";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { PiReadCvLogoBold } from "react-icons/pi";
const stories = [
  {
    id: 1,
    highlightedBar:
      " Life Project | In Partnership With IC-NET | Funded by Jica",
    title:
      "From Goats: Painnocing Chakma's Path to Prosperity with the LIFE Project",
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
      "From Goats: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
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
      "From Goats: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
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
    highlightedBar: " Suchana Project 1",
    title:
      "From Goats: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
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
      "From Goats: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
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
      "From Goats: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
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
      "From Goats: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
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
    highlightedBar: " Suchana Project 2",
    title:
      "From Goats: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
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
      "From Goats: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
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
      "From Goats: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
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
      "From Goats: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
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
    highlightedBar: " Suchana Project 3",
    title:
      "From Goats: Painnocing Chakma’s Path to Prosperity with the LIFE Project",
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

const MiniCaseStoryCards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;

  // Calculate the total number of pages
  const totalPages = Math.ceil(stories.length / cardsPerPage);

  // Get the current set of stories to display
  const currentStories = stories.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <motion.div className="flex flex-col items-center justify-center my-10">
      <div className="flex items-center justify-center gap-2 uppercase font-oswald">
        <p>Read more case stories </p>
        <PiReadCvLogoBold className="size-5" />
      </div>
      <div className="flex gap-5 mt-5">
        <FaArrowCircleLeft
          className={`text-2xl cursor-pointer ${
            currentPage === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-black"
          }`}
          onClick={handlePrevPage}
        />
        <FaArrowCircleRight
          className={`text-2xl cursor-pointer ${
            currentPage === totalPages - 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-black"
          }`}
          onClick={handleNextPage}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 justify-center items-center max-w-2xl mx-auto">
        {currentStories.map((story) => (
          <motion.div key={story.id}>
            <MiniCaseStoryCard story={story} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MiniCaseStoryCards;
