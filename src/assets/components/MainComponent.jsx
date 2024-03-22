import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { ethers } from 'ethers';

const MainComponent = () => {
    const [address, setAddress] = useState('Connect Wallet');
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const handleAccountsChanged = (newAccounts) => {
            setAddress(newAccounts[0] || 'Connect Wallet');
            if (newAccounts[0]) {
                fetchBalance(newAccounts[0]);
            }
        };

        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
        }

        return () => {
            if (window.ethereum) {
                window.ethereum.off('accountsChanged', handleAccountsChanged);
            }
        };
    }, []);

    const fetchBalance = async (account) => {
        try {
            const balanceValue = await window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] });
            const balanceInEther = ethers.utils.formatEther(balanceValue);
            setBalance(balanceInEther);
        } catch (error) {
            console.error("Error fetching balance:", error);
        }
    };

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAddress(accounts[0]);
                fetchBalance(accounts[0]);
            } catch (error) {
                console.error("Error connecting wallet:", error);
            }
        } else {
            alert('MetaMask is not installed. Please install MetaMask extension to connect your wallet.');
        }
    };

    const sendTx = async () => {
        try {
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    to: "0x42DAce9DF3e5847e39bEdD0cAD4cB982c21998cA",
                    from: address,
                    value: ethers.utils.parseEther('0.1'), // Sending 0.1 ETH
                    chainId: '0xAA36A7'
                }]
            });
        } catch (error) {
            console.error("Error sending transaction:", error);
        }
    };

    return (
        <div className="w-full pb-12 mt-[120px] flex flex-col items-center justify-center">
            {/* Section 1: How Blockchain is Transforming Farming */}
            <div className="w-full lg:w-11/12 flex flex-col lg:flex-row justify-center items-center mb-10">
                <div className="w-full lg:w-1/2 lg:order-2 p-6">
                    <img className="w-full rounded-3xl" src="https://i.ibb.co/7KrTPD7/crop1.jpg" alt="Blockchain and Farming" />
                </div>
                <div className="w-full lg:w-1/2 lg:order-1 p-6">
                    <div className="text-center text-green-500 text-4xl font-extrabold mb-7">
                        How Blockchain is Transforming Farming
                    </div>
                    <div className="text-lg font-bold mb-7 text-center">
                        Blockchain technology is revolutionizing the agricultural sector in various ways:
                    </div>
                    <div className="text-lg px-5 mb-7 ml-[70px]">
                        <ul className="list-disc list-inside ml-[70px]">
                            <li>Transparent and traceable supply chains</li>
                            <li>Efficient and secure transactions</li>
                            <li>Decentralized finance solutions for farmers</li>
                            <li>Data management and analytics for improved productivity</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Section 2: Support Farmers with Cryptocurrency Donations */}
            <div className="w-full lg:w-11/12 flex flex-col lg:flex-row justify-center items-center mb-10">
                <div className="w-full lg:w-1/2 lg:order-1 p-6">
                    <img className="w-full rounded-3xl" src="https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cryptocurrency Donations" />
                </div>
                <div className="w-full lg:w-1/2 lg:order-2 p-6">
                    <div className="text-center text-green-500 text-4xl font-extrabold mb-7">
                        Support Farmers with Cryptocurrency Donations
                    </div>
                    <div className="text-lg px-5 mb-7 text-center">
                        At Farming Insurance Company, we are committed to supporting farmers.
                        We provide refunds for successful insurance claims and accept donations
                        in cryptocurrency to further empower the farming community.
                    </div>
                    <div className="flex justify-center">
                        <Button variant="contained" onClick={sendTx}>Donate</Button>
                    </div>
                </div>
            </div>

            {/* Section 3: Connect Your Wallet */}
            <div className="w-full lg:w-11/12 flex flex-col lg:flex-row justify-center items-center mb-10">
                <div className="w-full lg:w-1/2 p-6">
                    <div className="text-center text-green-500 text-4xl font-extrabold mb-7">
                        Connect Your Wallet
                    </div>
                    <div className="text-lg px-5 mb-7 text-center">
                        Connect your Ethereum wallet to access additional features and services.
                        Your connected wallet will display your account address and balance.
                    </div>
                    <div className="flex justify-center">
                        <Button variant="outlined" onClick={connectWallet}>{address}</Button>
                        {balance && <div className="ml-3">Balance: {balance} ETH</div>}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-6">
                    <img className="w-full rounded-3xl" src="https://images.pexels.com/photos/14891535/pexels-photo-14891535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wallet Connection" />
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
