import React from 'react';
import 'react-bootstrap';


const NavbarComponent: React.FC = () => {
    return (
        <>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 p-3 fixed-top bg-dark mb-4">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src="../../public/pageLogo-d9340b4a.png" alt="The Forgotten City" className="mr-1" width="32"/>
                    <span className="fs-4 text-danger">The Forgotten City</span>
                </a>

                <ul className="nav nav-pills navbar-text">
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Discord</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Regeln</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">TeamSpeak3</a></li>
                </ul>
            </header>
        </>
    );
};

export default NavbarComponent;