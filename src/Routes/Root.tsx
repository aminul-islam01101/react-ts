import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Root = () => {
    console.log('Root hustky test');

    return (
        <div className=" flex flex-col justify-between min-h-screen">
            <div>
                <Navbar />
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Root;
