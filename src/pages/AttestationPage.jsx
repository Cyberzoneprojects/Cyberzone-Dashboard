import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AttestationContent from '../body-content/AttestationContent';

function AttestationPage() {
  return (
    
    <>
      <Header/>
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar/>
          <AttestationContent/>
        </div>
      </div>
    </>
  );
}

export default AttestationPage;
