import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProfileContent from '../body-content/ProfileContent';

function MyProfile() {
  return (
    
    <>
      <Header/>
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar/>
          <ProfileContent/>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
