import React from "react";
import styled from 'styled-components'
import { NavLink, Link } from "react-router-dom";
import Burger from "./Burger";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const StyledMainMenu = styled.nav`
width:91%;
display:flex;
align-items:center;
position:relative;
z-index:99;
    .desktop-menu {
        display:flex;
    align-items:center;
    padding-left:0;
    margin:0;
        a {
        color: var(--colors-text);
        padding:17px 0;
        border-right: 1px solid #1E2D3D;
        border-bottom:none;
        text-decoration:none;
        text-align:center;
        width:125px;
        &.active {
            border-bottom:3px solid #FEA55F;
        }
        }
        a.homelink {
            width:300px;
            text-align:left;
            padding-left: 25px;
        }
    }

    @media (max-device-width:768px) {
    & {
        width:95%;
        margin:0 auto;
        justify-content:space-between;
        position:static;
    }
    & > a {
        padding-left:0;
        position:relative;
        z-index:99;
    }
    & > .desktop-menu > .pageNavi {
        display:none;
    }
}
`


const MainMenu = () => {

    const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);

    return (
        <StyledMainMenu>
            <NavLink to="/" className="homelink mobile">Home</NavLink>
            <ul className="desktop desktop-menu">
                <Link to="/" className="homelink">Home</Link>
                <NavLink to="/about" className="pageNavi">_about-me</NavLink>
                <NavLink to="/projects" className="pageNavi">_projects</NavLink>
            </ul>

            <Burger
                onClick={() => { setMobileMenuOpened(!isMobileMenuOpened) }}
                isMobileMenuOpened={isMobileMenuOpened}
            />

            <MobileMenu
                // onClick={() => { 
                //     setMobileMenuOpened(!isMobileMenuOpened) 
                // }}
                setMobileMenuOpened={() => {setMobileMenuOpened(!isMobileMenuOpened)}}
                isMobileMenuOpened={isMobileMenuOpened}
            />
        </StyledMainMenu>
    )
}

export default MainMenu