import React from 'react'
function Header(){
    return(
        <>
            <header className="navbar navbar-dark sticky-top bg- flex-md-nowrap px-0 py-0 shadow">
                <div className='d-sm-flex justify-content-between bg-dark col-md-2 py-4'>
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 col-sm-" href="#">Logo</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed col-sm-" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                </div>
                {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="#">Sign out</a>
                    </div>
                </div>
            </header>
        </>
    );
}


export default Header;