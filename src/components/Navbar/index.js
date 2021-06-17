import React from 'react'
import {Nav,NavLink,Bars,/*NavBtn,NavBtnLink,*/NavMenu} from './navbarelements';


const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <h1>Dashboard</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                {/*<NavLink to="/Services" activeStyle>
                    Services
                </NavLink>*/}
                <NavLink to="/Contact" activeStyle>
                    Contact
                </NavLink>
                {/*<NavLink to="/Sign Up" activeStyle>
                    Sign Up
                </NavLink>*/}
            </NavMenu>
            {/*<NavBtn>
                <NavBtnLink to="/Sign In"></NavBtnLink>
            </NavBtn>*/}
        </Nav>
        </>
    )
}

export default Navbar;
