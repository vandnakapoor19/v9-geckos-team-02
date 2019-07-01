import React from 'react';
import HomeSlider from './homeslider';
import Category from '../../components/containers/category';

const Home = () => (
      <section >       
        <HomeSlider/>
        <div className="container"><Category /></div>
      </section>
  );

export default Home;