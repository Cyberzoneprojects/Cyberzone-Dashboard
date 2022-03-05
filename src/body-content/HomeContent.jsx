import React from "react";
import Modules from '../components/Modules';
import "../App.css";

function HomeContent (){
    return(
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2" style={{color: "#36474f"}}><b>MODULES</b></h1>
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

                <div style={{marginBottom: "-3rem"}}></div>

                <div className="wrapper">
                     <Modules image="./images/Module1.png" module_name="MODULE 1" title="Panorama de la SSI" module_page="/module1"/>
                     <Modules image="./images/Module2.png" module_name="MODULE 2" title="Sécurité de l’authentification" module_page="/module2"/>
                     <Modules image="./images/Module3.png" module_name="MODULE 3" title="Sécurité sur Internet" module_page="/module3"/>
                     <Modules image="./images/Module4.png" module_name="MODULE 4" title="Sécurité du poste de travail et nomadisme" module_page="/module4"/>
                </div>

                <div className="footer" style={{backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", height: "3.4rem", marginLeft: "-2rem", marginRight: "-2rem", padding: "2rem", paddingTop: "1.1rem"}}>
                     <p style={{color: "#36474f"}}><b>&copy; 2022 Cyberzone</b></p>
                     <p style={{color: "#4b86c6"}}><b>Mentions legales</b></p> 
                </div>
            </main>

        </>
    )
}

export default HomeContent;