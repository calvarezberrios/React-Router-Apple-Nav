import React, { useState } from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText } from "reactstrap";
import SubNav from "./SubNav";


const NavWrapper = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubOpen, setIsSubOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggle = () => setIsOpen(!isOpen);
    const openSub = () => {
        setIsSubOpen(true);
        setIsOpen(false);
    }

    window.addEventListener("resize", (e) => {
        setWindowWidth(e.target.innerWidth);
    });
    
    return (
        <header>
            <Navbar color="dark" dark expand="md">

                <NavbarToggler onClick={toggle} />
                <NavbarBrand href="/">{windowWidth > 600 ? "Celestial Web Development" : "WebDev"}</NavbarBrand>
                <NavbarText>Mannie's Portfolio</NavbarText>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" nabbar>
                        <NavItem>
                            <NavLink href="#" onClick = {openSub}>Link 1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick = {openSub}>Link 2</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
            
            <Collapse isOpen = {isSubOpen}>
                <SubNav />
            </Collapse>
        </header>
    );
};

export default NavWrapper;