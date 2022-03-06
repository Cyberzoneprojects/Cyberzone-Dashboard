import React from 'react'

function Header(){
    return(
        <>
            <header className="navbar navbar-dark sticky-top bg- flex-md-nowrap px-0 py-0 shadow">
                <div className='d-sm-flex justify-content-between bg-dark col-md-2 py-4'>
                    <h2 className='text-white d-none d-md-block mx-auto'>Logo</h2>
                    <button className="navbar-toggler d-md-none collapsed col-sm- " type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-dark"></span>
                    </button>
                </div>
                {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
                <a className="navbar-brand col-md-3 text-dark mx-auto d-lg-none d-md-none d-xl-none" href="#">Logo</a>
                <div className="navbar-nav">
                <h2 className='text-black d-none d-md-block mx-auto' style={{paddingRight: '2rem'}}>LogOut</h2>
                </div>
            </header>
        </>
    );
}


export default Header;