import { useState, useEffect } from "react";
import DonateCard from "../../../components/DonateCard/DonateCard";

const Donate = () => {
    const [donationAccounts, setDonationAccounts] = useState([]);

    useEffect(() => {
        // Fetch the donation accounts data from the JSON file
        fetch("/assets/donationAccounts.json")
            .then((response) => response.json())
            .then((data) => setDonationAccounts(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    console.log(donationAccounts)
    return (
        <div className="my-20">
            <h1 className="font-bold text-xl md:text-3xl my-5 text-center">
                Donate to These Accounts
            </h1>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 p-5">
                {donationAccounts.map((account) => (
                    <DonateCard
                        key={account.id}
                        bankAccount={account.bankAccount}
                        accountName={account.accountName}
                        branch={account.branch}
                        contact={account.contact}
                        routingNumber={account.routingNumber}
                    />
                ))}
            </div>
        </div>
    );
};

export default Donate;
