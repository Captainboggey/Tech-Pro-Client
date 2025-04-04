import React from 'react';
import Banner from '../Components/Banner';
import Stat from '../Components/Stat';
import LanguageCard from '../Components/LanguageCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Stat></Stat>
           <LanguageCard></LanguageCard>
        </div>
    );
};

export default Home;