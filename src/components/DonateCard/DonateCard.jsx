const DonateCard = ({ bankAccountNo, accountHolderName, bankName, branch, routingNumber, swift }) => {
    return (
        <div className="p-6 bg-white dark:bg-neutral-500 border border-gray-300 dark:border-neutral-600 rounded-lg shadow-md transition-transform transform  hover:shadow-lg">
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><span className="font-medium">Bank Name:</span> {bankName}</p>
                <p><span className="font-medium">Bank Account No:</span> {bankAccountNo}</p>
                <p><span className="font-medium">Account Holder Name:</span> {accountHolderName}</p>
                <p><span className="font-medium">Branch:</span> {branch}</p>
                <p><span className="font-medium">Routing Number:</span> {routingNumber}</p>
                <p><span className="font-medium">Swift:</span> {swift}</p>
            </div>
        </div>
    );
};

export default DonateCard;
