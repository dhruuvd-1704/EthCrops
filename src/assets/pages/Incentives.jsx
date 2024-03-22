import React, { useState } from 'react';

const IncentivePage = () => {
    // Dummy data for claim status
    const [claimStatus, setClaimStatus] = useState('Pending');

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">Claim Incentive</h1>

            {/* Rules and regulations */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Rules and Regulations</h2>
                <p className="text-gray-700">
                    In order to claim your incentive for the loss incurred, please adhere to the following rules and regulations:
                    <ul className="list-disc ml-6">
                        <li>Provide accurate information about the loss incurred.</li>
                        <li>Submit necessary documents and proofs to support your claim.</li>
                        <li>Ensure that the claim is filed within the specified time frame.</li>
                        <li>Any false information provided may lead to rejection of the claim.</li>
                    </ul>
                </p>
            </div>

            {/* Blockchain Information */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Blockchain Information</h2>
                <p className="text-gray-700">
                    Our claim incentive system leverages blockchain technology to ensure transparency, security, and immutability of data. 
                    Blockchain enables farmers to track the status of their claims in real-time, providing a decentralized and tamper-proof solution.
                </p>
            </div>

            {/* Claim status */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Claim Status</h2>
                <p className="text-gray-700">Your claim status: <span className="font-bold">{claimStatus}</span></p>
            </div>

            {/* Incentives Information */}
            <div>
                <h2 className="text-xl font-semibold mb-2">Incentives Information</h2>
                <p className="text-gray-700">
                    Once your claim is verified and approved, you will receive incentives as compensation for the loss incurred. 
                    The amount of incentive provided will be based on various factors such as the severity of the loss, crop type, and market prices.
                </p>
            </div>
        </div>
    );
};

export default IncentivePage;
