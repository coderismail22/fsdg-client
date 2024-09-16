import { useState, useEffect } from "react";
import JobCircularCard from "../../../components/JobCircularCard/JobCircularCard";

const JobCircular = () => {
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    // Fetch the job circulars data from the JSON file
    fetch("/assets/jobCirculars.json")
      .then((response) => response.json())
      .then((data) => setCirculars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="my-20">
      <h1 className="uppercase font-yeseva font-bold text-xl md:text-3xl my-5 text-center">
        We are currently looking for
      </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 p-5">
        {circulars.map((item) => (
          <JobCircularCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default JobCircular;
