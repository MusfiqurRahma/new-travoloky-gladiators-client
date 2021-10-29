import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Findflight from '../Findflight/Findflight';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hotels from '../Hotels/Hotels';
import Newsandupdate from '../Newsandupdates/Newsandupdate';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Findflight></Findflight>
            <Packages></Packages>
            <About></About>
            <Hotels></Hotels>
            <Newsandupdate></Newsandupdate>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;