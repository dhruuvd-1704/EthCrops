import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const crops = [
    "Absinthe",
    "Ajwan",
    "Alasande Gram",
    "Almond(Badam)",
    "Alsandikai",
    "Amaranthus",
    "Ambada Seed",
    "Ambady/Mesta",
    "Amla(Nelli Kai)",
    "Amphophalus",
    "Amaranthas Red",
    "Antawala",
    "Anthorium",
    "Apple",
    "Apricot(Jardalu/Khumani)",
    "Arecanut(Betelnut/Supari)",
    "Arhar (Tur/Red Gram)(Whole)",
    "Arhar Dal(Tur Dal)",
    "Asalia",
    "Ashgourd",
    "Ashwagandha",
    "Asparagus",
    "Astera",
    "Avare Dal",
    "Bael",
    "Bajra(Pearl Millet/Cumbu)",
    "Balekai",
    "Balsam",
    "Bamboo",
    "Banana",
    "Banana - Green",
    "Barley (Jau)",
    "Basil",
    "Bay leaf (Tejpatta)",
    "Beans",
    "Beaten Rice",
    "Beetroot",
    "Bengal Gram Dal (Chana Dal)",
    "Bengal Gram(Gram)(Whole)",
    "Ber(Zizyphus/Borehannu)",
    "Betal Leaves",
    "Betelnuts",
    "Bhindi(Ladies Finger)",
    "Bhui Amlaya",
    "Big Gram",
    "Binoula",
    "Bitter gourd",
    "Black Gram (Urd Beans)(Whole)",
    "Black Gram Dal (Urd Dal)",
    "Black pepper",
    "BOP",
    "Borehannu",
    "Bottle gourd",
    "Brahmi",
    "Bran",
    "Brinjal",
    "Broken Rice",
    "Broomstick(Flower Broom)",
    "Bull",
    "Bullar",
    "Bunch Beans",
    "Butter",
    "Buttery",
    "Cabbage",
    "Calendula",
    "Calf",
    "Camel Hair",
    "Cane",
    "Capsicum",
    "Cardamoms",
    "Carnation",
    "Carrot",
    "Cashew Kernnel",
    "Cashewnuts",
    "Castor Oil",
    "Castor Seed",
    "Cauliflower",
    "Chakotha",
    "Chandrashoor",
    "Chapparad Avare",
    "Chennangi (Whole)",
    "Chennangi Dal",
    "Cherry",
    "Chikoos(Sapota)",
    "Chili Red",
    "Chilly Capsicum",
    "Chow Chow",
    "Chrysanthemum",
    "Chrysanthemum(Loose)",
    "Cinamon(Dalchini)",
    "Cineraria",
    "Clarkia",
    "Cloves",
    "Cluster beans",
    "Coca",
    "Cock",
    "Cocoa",
    "Coconut",
    "Coconut Oil",
    "Coconut Seed",
    "Coffee",
    "Colacasia",
    "Copra",
    "Coriander(Leaves)",
    "Coriander seed",
    "Cossandra",
    "Cotton",
    "Cotton Seed",
    "Cow",
    "Cowpea (Lobia/Karamani)",
    "Cowpea(Veg)",
    "Cucumbar(Kheera)",
    "Cummin Seed(Jeera)",
    "Custard Apple (Sharifa)",
    "Daila(Chandni)",
    "Dal (Avare)",
    "Dalda",
    "Delha",
    "Dhaincha",
    "Dhawai flowers",
    "Dianthus",
    "Dried mango",
    "Drumstick",
    "Dry Chillies",
    "Dry Fodder",
    "Dry Grapes",
    "Duck",
    "Duster Beans",
    "Egg",
    "Egyptian Clover(Barseem)",
    "Elephant Yam (Suran)",
    "Field Pea",
    "Fig(Anjura/Anjeer)",
    "Firewood",
    "Fish",
    "Flower Broom",
    "Foxtail Millet(Navane)",
    "French Beans (Frasbean)",
    "Galgal(Lemon)",
    "Gamphrena",
    "Garlic",
    "Ghee",
    "Giloy",
    "Gingelly Oil",
    "Ginger(Dry)",
    "Ginger(Green)",
    "Gladiolus Bulb",
    "Gladiolus Cut Flower",
    "Glardia",
    "Goat",
    "Goat Hair",
    "Golden Rod",
    "Gram Raw(Chholia)",
    "Gramflour",
    "Grapes",
    "Green Avare (W)",
    "Green Chilli",
    "Green Fodder",
    "Green Gram (Moong)(Whole)",
    "Green Gram Dal (Moong Dal)",
    "Green Peas",
    "Ground Nut Oil",
    "Ground Nut Seed",
    "Groundnut",
    "Groundnut (Split)",
    "Groundnut pods (raw)",
    "Guar",
    "Guar Seed(Cluster Beans Seed)",
    "Guava",
    "Gudmar",
    "Guggal",
    "Gulli",
    "Gur(Jaggery)",
    "Gurellu",
    "Gypsophila",
    "Haralekai",
    "He Buffalo",
    "Heliconia species",
    "Hen",
    "Hippe Seed",
    "Honey",
    "Honge seed",
    "Hybrid Cumbu",
    "Hydrangea",
    "Indian Beans (Seam)",
    "Indian Colza(Sarson)",
    "Irish",
    "Isabgul (Psyllium)",
    "Jack Fruit",
    "Jaffri",
    "Jaggery",
    "Jamamkhan",
    "Jamun(Narale Hannu)",
    "Jarbara",
    "Jasmine",
    "Javi",
    "Jowar(Sorghum)",
    "Jute",
    "Jute Seed",
    "Kabuli Chana(Chickpeas-White)",
    "Kacholam",
    "Kakada",
    "Kalihari",
    "Kalmegh",
    "Kankambra",
    "Karamani",
    "Karanja seeds",
    "Karbu",
    "Karbuja(Musk Melon)",
    "Kartali (Kantola)",
    "Kevda",
    "Kharif Mash",
    "Khoya",
    "Kinnow",
    "Knool Khol",
    "Kodo Millet(Varagu)",
    "Kokum",
    "Kooth",
    "Kuchur",
    "Kulthi(Horse Gram)",
    "Kutki",
    "Kutki",
    "Ladies Finger",
    "Lak(Teora)",
    "Leafy Vegetable",
    "Lemon",
    "Lentil (Masur)(Whole)",
    "Lilly",
    "Lime",
    "Limonia (status)",
    "Linseed",
    "Lint",
    "Liquor Turmeric",
    "Litchi",
    "Little Gourd (Kundru)",
    "Long Melon(Kakri)",
    "Lotus",
    "Lotus Sticks",
    "Lukad",
    "Lupine",
    "Mace",
    "Macoy",
    "Mahedi",
    "Mahua",
    "Mahua Seed(Hippe seed)",
    "Maida Atta",
    "Maize",
    "Mango",
    "Mango (Raw-Ripe)",
    "Mango Powder",
    "Maragensu",
    "Marasebu",
    "Marget",
    "Marigold(Calcutta)",
    "Marigold(loose)",
    "Mash",
    "Mashrooms",
    "Masur Dal",
    "Mataki",
    "Methi Seeds",
    "Methi(Leaves)",
    "Millets",
    "Mint(Pudina)",
    "Moath Dal",
    "Moath Dal",
    "Mousambi(Sweet Lime)",
    "Muesli",
    "Muleti",
    "Mustard",
    "Mustard Oil",
    "Myrobolan(Harad)",
    "Nargasi",
    "Nearle Hannu",
    "Neem Seed",
    "Nelli Kai",
    "Nigella Seeds",
    "Nigella Seeds",
    "Niger Seed (Ramtil)",
    "Nutmeg",
    "Onion",
    "Onion Green",
    "Orange",
    "Orchid",
    "Other Green and Fresh Vegetables",
    "Other Pulses",
    "Ox",
    "Paddy(Dhan)(Basmati)",
    "Paddy(Dhan)(Common)",
    "Palash flowers",
    "Papaya",
    "Papaya (Raw)",
    "Patti Calcutta",
    "Peach",
    "Pear(Marasebu)",
    "Peas Cod",
    "Peas Wet",
    "Peas(Dry)",
    "Pegeon Pea (Arhar Fali)",
    "Pepper Garbled",
    "Pepper Ungarbled",
    "Persimmon(Japani Fal)",
    "Pigs",
    "Pineapple",
    "Pippali",
    "Plum",
    "Pointed Gourd (Parval)",
    "Polherb",
    "Pomegranate",
    "Poppy Capsules",
    "Poppy Seeds",
    "Potato",
    "Pumpkin",
    "Pundi",
    "Pundi Seed",
    "Pupadia",
    "Raddish",
    "Ragi (Finger Millet)",
    "Raibel",
    "Rajgir",
    "Ram",
    "Rat Tail Radish (Mogari)",
    "Ratanjot",
    "Raya",
    "Red Gram",
    "Resinwood",
    "Riccbcan",
    "Rice",
    "Ridgeguard(Tori)",
    "Rose(Local)",
    "Rose(Loose))",
    "Rose(Tata)",
    "Round Gourd",
    "Rubber",
    "Sabu Dan",
    "Safflower",
    "Saffron",
    "Sajje",
    "Salvia",
    "Same/Savi",
    "Sanay",
    "Sandalwood",
    "Sarasum",
    "Season Leaves",
    "Seegu",
    "Seemebadnekai",
    "Seetapal",
    "Sesamum(Sesame,Gingelly,Til)",
    "Sevanti",
    "Siddota",
    "Skin And Hide",
    "Snakeguard",
    "Soanf",
    "Soapnut(Antawala/Retha)",
    "Soji",
    "Sompu",
    "Soyabean",
    "Spikenard",
    "Spinach",
    "Sponge Gourd",
    "Squash(Chappal Kadoo)",
    "Stevia",
    "Stone Pulverizer",
    "Sugar",
    "Sugarcane",
    "Sunflower",
    "Sunflower Seed",
    "Sunhemp",
    "Suram",
    "Surat Beans (Papadi)",
    "Suva (Dill Seed)",
    "Suvarna Gadde",
    "Sweet Potato",
    "Sweet Pumpkin",
    "Sweet Sultan",
    "Sweet William",
    "T.V. Cumbu",
    "Tamarind Fruit",
    "Tamarind Seed",
    "Tapioca",
    "Taramira",
    "Tea",
    "Tender Coconut",
    "Thinai (Italian Millet)",
    "Thogrikai",
    "Thondekai",
    "Tinda",
    "Tobacco",
    "Tomato",
    "Torchwood",
    "Toria",
    "Tube Flower",
    "Tube Rose(Double)",
    "Tube Rose(Loose)",
    "Tube Rose(Single)",
    "Tulip",
    "Turmeric",
    "Turmeric (Raw)",
    "Turnip",
    "Vadang",
    "Vatsanabha",
    "Walnut",
    "Water Melon",
    "Wheat",
    "Wheat Atta",
    "White Muesli",
    "White Peas",
    "White Pumpkin",
    "Wood",
    "Wool",
    "Yam",
    "Yam (Ratalu)"
    ];
    console.log(crops)

const FarmerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        lossAmount: '',
        claimPrice: '',
        startDate: null,
        endDate: null,
        crop: '',
        metamaskAccount: '',
        aadharCard: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (dateName, date) => {
        setFormData({ ...formData, [dateName]: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add submission logic here
    };

    return (
        <div className="w-full max-w-lg mx-auto mt-[150px]">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Amount of Loss (in quintal):</label>
                    <input type="number" name="lossAmount" value={formData.lossAmount} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Claim Price:</label>
                    <input type="number" name="claimPrice" value={formData.claimPrice} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Date Range of Damage:</label><br />
                    <DatePicker selected={formData.startDate} onChange={(date) => handleDateChange('startDate', date)} selectsStart startDate={formData.startDate} endDate={formData.endDate} placeholderText="Start Date" required className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500" />
                    <DatePicker selected={formData.endDate} onChange={(date) => handleDateChange('endDate', date)} selectsEnd startDate={formData.startDate} endDate={formData.endDate} placeholderText="End Date" required className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Crop:</label>
                    <select className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" value={formData.crop} onChange={handleChange} name="crop" required>
                        <option value="">Select a crop...</option>
                        {crops.map((crop, index) => (
                            <option key={index} value={crop}>{crop}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="metamaskAccount">
                        Metamask Account
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="metamaskAccount"
                        type="text"
                        placeholder="Enter your Metamask account number"
                        name="metamaskAccount"
                        value={formData.metamaskAccount}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadharCard">
                        Aadhar Card Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="aadharCard"
                        type="text"
                        placeholder="Enter your Aadhar card number"
                        name="aadharCard"
                        value={formData.aadharCard}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FarmerForm;
