import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import HomeContent from '../body-content/HomeContent';

function HomePage() {
  return (
    
    <>
      <Header/>
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar/>
          <HomeContent/>
        </div>
      </div>
    </>
  );
}

export default HomePage;
