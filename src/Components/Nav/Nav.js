import React from 'react';
import logo from '.././Images/movie.png';

const Nav = () => {
    return (
        <div className='container p-'>
            <nav className="navbar bg-light">
                <div className="">

                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-5 ms-2" />
                    Watch Movies Club

                </div>
            </nav>
        </div>
    );
};

export default Nav;