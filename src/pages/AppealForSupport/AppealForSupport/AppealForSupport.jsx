import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AppealForSupport = () => {
    const [appealData, setAppealData] = useState(null);
    useEffect(() => {
        // Fetch the JSON data (You can replace the URL with the correct path)
        fetch("/assets/appeal.json")
            .then((response) => response.json())
            .then((data) => {
                // Set the first entry from JSON (you can adapt this for dynamic loading)
                setAppealData(data[0]);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!appealData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-6 w-9/12 ">
                {appealData.title}
            </h1>

            {/* Image */}
            <img
                src={appealData.image}
                alt="Appeal Image"
                className="w-full max-w-3xl h-auto object-cover mb-6 rounded-md"
            />

            {/* Message */}
            <p className="text-lg md:text-2xl text-center text-gray-600 w-9/12">
                {appealData.message}
            </p>

            {/* Button */}
            <p className="text-lg md:text-2xl text-center text-gray-600 my-10">
                <Link
                    to={appealData.link}
                    className="font-montserrat flex gap-5 items-center justify-center text-xl bg-[#FFCD05] w-[200px] h-[50px] p-2 mt-5"
                >
                    {appealData.buttonText}
                </Link>
            </p>
        </div>
    );
};

export default AppealForSupport;
