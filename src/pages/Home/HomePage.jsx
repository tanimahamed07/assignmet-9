import React from 'react';
import HeroSlider from './HeroSlider';
import ServicesSection from './ServicesSection';
import TipsSection from './TipsSection';
import VetsSection from './VetsSection';
import CustomerReview from './CustomerReview';


const HomePage = () => {
        
    return (
        <div>
            <HeroSlider/>
            <ServicesSection/>
            <TipsSection/>
            <VetsSection/>
            <CustomerReview/>
        </div>
    );
};

export default HomePage;