import React from 'react'
import { Link } from 'react-router-dom'; 

import '../styles/layout.css'
function Sidebar (){
    return(
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse position-fixed" style={{minHeight:'100vh', background:'#0b426a'}}>
            <div className="position-sticky pt-3 pl-4">
                <ul className="nav flex-column pt-5 mx-auto pl-4">
                    <li className="nav-item pt-3" style={{fontSize: '1.2rem'}}>
                        <Link to='/' className='text-white' style={{textDecoration:'none'}}>Home</Link>
                    </li>
                    <li className="nav-item pt-3 " style={{fontSize: '1.2rem'}}>
                        <Link to='/res' className='text-white' style={{textDecoration:'none'}}>My resources</Link>
                    </li>
                    <li className="nav-item pt-3" style={{fontSize: '1.2rem'}}>
                        <Link to='/attest' className='text-white' style={{textDecoration:'none'}}>My attestation</Link>
                    </li>

                    <li className="nav-item pt-3" style={{fontSize: '1.2rem'}}>
                        <Link to='/profile' className='text-white' style={{textDecoration:'none'}}>My profile</Link>
                    </li>
                    
                </ul>
            </div>
            </nav>
        </>
    );
}

export default Sidebar;





