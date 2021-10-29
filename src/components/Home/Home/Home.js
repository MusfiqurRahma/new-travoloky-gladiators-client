import React from 'react';
import About from '../About/About';
import Findflight from '../Findflight/Findflight';
import Header from '../Header/Header';
import Hotels from '../Hotels/Hotels';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Findflight></Findflight>
            <Packages></Packages>
            <About></About>
            <Hotels></Hotels>
        </div>
    );
};

export default Home;