import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Findflight from '../Findflight/Findflight';
import Hotels from '../Hotels/Hotels';
import Newsandupdate from '../Newsandupdates/Newsandupdate';
import Packages from '../Packages/Packages';



const Home = () => {
    return (
        <div>
            <Findflight></Findflight>
            <Packages></Packages>
            <About></About>
            <Hotels></Hotels>
            <Newsandupdate></Newsandupdate>
            <Contact></Contact>
        </div>
    );
};

export default Home;