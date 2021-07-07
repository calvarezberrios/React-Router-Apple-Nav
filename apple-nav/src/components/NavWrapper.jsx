import React, { useState } from 'react';
import logo from "../images/pokemon_logo.png";
import pokeball from "../images/pokeball.png";
import { Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarText } from "reactstrap";
import SubNav from "./SubNav";
import { Link} from "react-router-dom";


const NavWrapper = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubOpen, setIsSubOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggle = () => setIsOpen(!isOpen);
    const openSub = () => {
        setIsSubOpen(true);
        setIsOpen(false);
        
    }
    const closeSub = () => {
        setIsSubOpen(false);
        setIsOpen(false);
    }

    window.addEventListener("resize", (e) => {
        setWindowWidth(e.target.innerWidth);
    });
    
    return (
        <header>
            <Navbar color="danger" dark expand="md">

                <NavbarToggler onClick={toggle} />

                <Link to = "/" onClick = {closeSub}>
                    
                        {<img width = {windowWidth > 600 ? "150" : "55"} src = {windowWidth > 600 ? logo : pokeball}  alt = "Logo" />}
                    
                </Link>
                
                <NavbarText>Mannie's Portfolio</NavbarText>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" nabbar>
                        <NavItem>
                            <Link to = "/linkone" onClick = {openSub}>Link 1</Link>
                        </NavItem>
                        <NavItem>
                            <Link to = "/linktwo" onClick = {openSub}>Link 2</Link>
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