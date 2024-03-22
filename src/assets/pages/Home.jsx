import MainComponent from '../components/MainComponent';
import Navbar from '../components/Navbar';
import '../css/Home.css';


const Home = () => {
    return (
        <div>
            <div className="p-3 text-[30px]  homeimage bg-repeat-y">
                <MainComponent/>
            </div>

        </div>
    );
}

export default Home;
