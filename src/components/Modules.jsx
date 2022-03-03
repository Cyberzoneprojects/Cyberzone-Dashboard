import React from 'react';
import { FaAccusoft, FaAdn } from "react-icons/fa";
import { Card, Card_body, Card_image, Divider_line, Card_button, Module_name, Section_container, Headering, Sub_section_container, Section_text, Time_used} from '../styles/module.style';



function Modules(props){
    return(
        <>
            <Card>
                 <Card_body>
                     <Card_image src={props.img} />
                     <Divider_line></Divider_line>
                     <div>
                         <Module_name><b>{props.name}</b></Module_name>
                     </div>
                     <div>
                         <Headering>{props.heading}</Headering>
                     </div>
                     <Section_container>
                         <Sub_section_container>
                             <div><FaAccusoft/></div>
                             <div><Section_text>Temps passé :</Section_text></div>
                         </Sub_section_container>
                         <Sub_section_container>
                             <div><FaAdn/></div>
                             <div><Section_text>score: 0%</Section_text></div>
                         </Sub_section_container>
                     </Section_container>
                     <div><Time_used>00:00:00</Time_used></div>
                     <center><Card_button>Show Unites</Card_button></center>
                 </Card_body>
            </Card>
        </>
    );
}


export default Modules;