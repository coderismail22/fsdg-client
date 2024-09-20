const DonateCard = ({ bankAccount, accountName, branch, contact, routingNumber }) => {
    return (
        <div className="p-6 bg-white dark:bg-neutral-500 border border-gray-300 dark:border-neutral-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-4">{accountName}</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><span className="font-medium">Bank Account:</span> {bankAccount}</p>
                <p><span className="font-medium">Branch:</span> {branch}</p>
                <p><span className="font-medium">Contact:</span> {contact}</p>
                <p><span className="font-medium">Routing Number:</span> {routingNumber}</p>
            </div>
        </div>
    );
};

export default DonateCard;
