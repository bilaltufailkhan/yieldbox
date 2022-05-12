import React from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg'
import dashboard from '../assets/img/dashboard.png'
import calculator from '../assets/img/calculator.png'
import swap from '../assets/img/swap.png'
import docs from '../assets/img/documents.png'

const SideNav = () => {
    const [show, setShow] = React.useState(true);

    return (
        <>
            <Offcanvas show={show} backdrop={false}>
                <Offcanvas.Header>
                    <Link to="/" className='nav-link logo'><img src={logo} className="logo__img" />{" "}Yield Box</Link>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Link to="/dashboard" className='nav-link'><img src={dashboard} />{" "}Dashboard</Link>
                    <Link to="/calculator" className='nav-link'><img src={calculator} />{" "}Calculator</Link>
                    <Link to="/swap" className='nav-link'><img src={swap} />{" "}Swap</Link>
                    <Link to="/docs" className='nav-link'><img src={docs} />{" "}Documents</Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideNav