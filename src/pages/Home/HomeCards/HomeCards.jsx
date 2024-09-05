import { useEffect, useState } from "react";
import HomeCard from "../../../components/HomeCard/HomeCard";

const HomeCards = () => {
  const [cardData, setCardData] = useState([]);
  const fetchCardData = async () => {
    const res = await fetch("homecarddata.json");
    const data = await res.json();
    setCardData(data);
  };
  useEffect(() => {
    fetchCardData();
  }, []);
  return (
    <div >
      {cardData.map((card) => (
        <HomeCard key={card.index} card={card}/>
      ))}
    </div>
  );
};

export default HomeCards;
