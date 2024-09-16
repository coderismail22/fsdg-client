import { useEffect, useState } from 'react';

const PersonTable = () => {
    const [peopleData, setPeopleData] = useState([]);

    useEffect(() => {
        fetch('/assets/whoarewe.json')
            .then((response) => response.json())
            .then((data) => setPeopleData(data))
            .catch((error) => console.error('Error loading JSON:', error));
    }, []);

    return (
        <div className="overflow-x-auto bg-white dark:bg-neutral-700">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
                <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600 border-t">
                    <tr>
                        <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">Name</th>
                        <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">Occupation</th>
                        <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">Designation</th>
                        <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {peopleData.map((person, index) => (
                        <tr key={index} className="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                            <th scope="row" className="px-6 py-4 border-x dark:border-neutral-600">{person.name}</th>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">{person.occupation}</td>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">{person.designation}</td>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">
                                <img src={person.photo} alt={person.name} className="w-16 h-16 object-cover rounded-full" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PersonTable;
