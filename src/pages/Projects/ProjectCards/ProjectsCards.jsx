import { useEffect, useState } from "react";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
const ProjectsCards = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        console.log("Fetching project data...");
        const res = await fetch("projectdata.json");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setCardData(data);
        console.log("Data fetched:", data);
      } catch (error) {
        console.error("Error fetching the project data:", error);
      }
    };

    fetchCardData();
  }, []);
  return (
    <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
      {cardData.map((singleCard) => (
        <ProjectCard key={singleCard.id} cardData={singleCard} />
      ))}
    </div>
  );
};

export default ProjectsCards;
