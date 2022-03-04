import React from 'react';
import { FaAccusoft, FaAdn } from "react-icons/fa";

function Modules(props){
    return(
        <>
           <div className="card">
                 <img className="card_image" src={props.image} />
                 <div className="Divider_line"></div>
                 <div className="card_body">
                     <h3 className="card_module">{props.module_name}</h3>
                     <h2 className="card_title">{props.title}</h2>
                     <div className="card_info">
                         <div className="time">
                             <FaAccusoft size='1.1rem' style={{marginTop: '.4rem'}} />
                             <div><p className='time_passed'>Temps passé : 00:00:00</p></div>
                         </div>
                         <div className='score'>
                             <FaAdn size='1.1rem' style={{marginTop: '.4rem'}} />
                             <div><p className='rating'>Score : 0%</p></div>
                         </div>
                     </div>
                     <center><button className="card_btn">Button</button></center>
                 </div>
           </div>
        </>
    );
}


export default Modules;