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
                Donate to these Accounts
            </h1>
            <div className="grid gap-10  p-5">
                {donationAccounts.map((account) => (
                    <DonateCard
                        key={account.id}
                        bankAccountNo={account.bankAccountNo}
                        accountHolderName={account.accountHolderName}
                        bankName={account.bankName}
                        branch={account.branch}
                        routingNumber={account.routingNumber}
                        swift={account.swift}
                    />
                ))}
            </div>
        </div>
    );
};

export default Donate;
