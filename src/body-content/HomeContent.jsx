import React from "react";
import Modules from '../components/Modules';
import "../App.css";

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



                <div className="wrapper">
               
                        <Modules image="./images/Module1.png" module_name="MODULE 1" title="Panorama de la SSI"/>
                
                        <Modules image="./images/Module2.png" module_name="MODULE 2" title="Sécurité de l’authentification"/>
                 
                        <Modules image="./images/Module3.png" module_name="MODULE 3" title="Sécurité sur Internet"/>
                  
                        <Modules image="./images/Module4.png" module_name="MODULE 4" title="Sécurité du poste de travail et nomadisme"/>
                </div>





            </main>
        </>
    )
}

export default HomeContent;