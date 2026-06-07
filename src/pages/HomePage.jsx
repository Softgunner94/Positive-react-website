import React from 'react';
import Banner from "./home/Banner.jsx";
import WhoWeAre from './home/WhoWeAre.jsx';
import OurServices from './home/OurServices.jsx';
import HowWeWork from './home/HowWeWork.jsx';
import WhyChooseUs from './home/WhyChooseUs.jsx';
import PageHeader from '../components/PageHeader.jsx';



export default function HomePage() {
  return (
    <div>
       <PageHeader />
        <Banner />
        <WhoWeAre />
        <OurServices />
        <HowWeWork />
        <WhyChooseUs />
    </div>
  );
}