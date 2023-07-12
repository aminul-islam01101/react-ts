/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-nested-ternary */
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Root = () => {
    console.log('Root');

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
