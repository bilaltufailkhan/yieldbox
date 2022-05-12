import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg'

const Navigation = () => {
    return (
        <>
            <Navbar expand="lg" className='py-3'>
                <Container>
                    <Link to="/" className='navbar-brand logo'><img src={logo} className="logo__img" />{" "}Yield Box</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Nav className='mr-auto'>
                        <Link className='nav-link'><i class="fa-brands fa-instagram"></i></Link>
                        <Link className='nav-link'><i class="fa-brands fa-linkedin"></i></Link>
                        <Link className='nav-link'><i class="fa-brands fa-medium"></i></Link>
                        <Link className='nav-link'><i class="fa-brands fa-twitter"></i></Link>
                        <Link className='nav-link'><i class="fa-brands fa-facebook"></i></Link>
                        <Button className="btn px-4 py-2">Connect</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;