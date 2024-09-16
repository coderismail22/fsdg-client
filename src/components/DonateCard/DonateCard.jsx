const DonateCard = ({ bankAccount, accountName, branch, contact, routingNumber }) => {
    return (
        <div className="p-5 border shadow-lg rounded-md">
            <h3 className="font-bold text-lg">{accountName}</h3>
            <p><strong>Bank Account:</strong> {bankAccount}</p>
            <p><strong>Branch:</strong> {branch}</p>
            <p><strong>Contact:</strong> {contact}</p>
            <p><strong>Routing Number:</strong> {routingNumber}</p>
        </div>
    );
};

export default DonateCard;
