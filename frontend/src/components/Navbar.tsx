import React from 'react';
import 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarComponent: React.FC = () => {
    return (
        <>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-5 p-3 fixed-top bg-dark mb-4">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src="pageLogo-d9340b4a.png" alt="The Forgotten City" className="mr-1" width="32"/>
                    <span className="fs-4 text-danger">The Forgotten City</span>
                </a>

                <ul className="nav nav-pills navbar-text">
                    <li className="nav-item mr-2"><Navbar as={NavLink} to="/" className="nav-link text-white app-menu-button">Home</Navbar></li>
                    <li className="nav-item"><Navbar as={NavLink} to="/newspaper" className="nav-link text-white app-menu-button">IC Zeitung</Navbar></li>
                </ul>
            </header>
        </>
    );
};

export default NavbarComponent;