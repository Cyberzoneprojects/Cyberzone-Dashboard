import React from "react";
import Modules from '../components/Modules';
import {Module_display} from '../styles/module.style';

function HomeContent (){
    return(
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Home page</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar"></span>
                        This week
                    </button>
                    </div>
                </div>



                <Module_display>
                     <div>
                        <Modules img="./images/Cature.PNG" name="MODULE 1" heading="Panorama de la SSI"/>
                     </div>
                     <div>
                        <Modules img="./images/Cature.PNG" name="MODULE 2" heading="Sécurité de l’authentification"/>
                     </div>
                     <div>
                        <Modules img="./images/Cature.PNG" name="MODULE 3" heading="Sécurité sur Internet"/>
                     </div>
                     <div>
                        <Modules img="./images/Cature.PNG" name="MODULE 4" heading="Sécurité du poste de travail et nomadisme"/>
                     </div>
                    
                </Module_display>





            </main>
        </>
    )
}

export default HomeContent;