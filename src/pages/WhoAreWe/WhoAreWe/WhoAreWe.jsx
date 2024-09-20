import { useEffect, useState } from 'react';

const WhoAreWe = () => {
    const [peopleData, setPeopleData] = useState([]);

    useEffect(() => {
        fetch('/assets/whoarewe.json')
            .then((response) => response.json())
            .then((data) => setPeopleData(data))
            .catch((error) => console.error('Error loading JSON:', error));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 bg-slate-100">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {peopleData.map((person, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-neutral-600">
                        <div className="p-6 flex flex-col items-center justify-center hover:bg-neutral-700 transition-all duration-1000">
                            <img
                                src={person.photo}
                                alt={person.name}
                                className="w-32 h-32 object-cover rounded-full mb-4"
                            />
                            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                                {person.name}
                            </h2>
                            <p className="text-[15px] text-gray-600 dark:text-gray-400 mb-2">
                                <span className='font-bold'>Occupation:</span> {person.occupation}
                            </p>
                            <p className="text-[15px] text-gray-600 dark:text-gray-400 mb-4">
                                <span className='font-bold'>Designation:</span> {person.designation}
                            </p>
                            <a
                                href={person.cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhoAreWe;
