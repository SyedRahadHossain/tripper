import React from 'react';
import Packages from '../Packages/Packages';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Stats></Stats>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;