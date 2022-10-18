import React from "react";
import styled from 'styled-components';
import MainMenu from "./mainMenu/MainMenu";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

const StyledHeader = styled.div`
display:flex;
width:100%;
justify-content:space-between;
align-items:center;
border-bottom:1px solid #1E2D3D;
    a {
    color: var(--colors-text);
    min-width:150px;
    }
    .pageNavi.contactsNavi {
        border-left:1px solid #1E2D3D;
        margin-left:20px;
        padding:17px 0 17px 20px;
        &.active {
            border-bottom:3px solid #FEA55F;
        }
    }
@media (max-device-width:768px){
    & {
        width:90%;
        margin:0 auto;
        border-bottom:none;
    }
    .pageNavi {
        display:none;
    }
}
`



const Header = () => {
    return (
        <StyledHeader>
            <MainMenu/>
            <ThemeSwitcher/>
            <NavLink to="/contacts" className="pageNavi contactsNavi">_contact-me</NavLink>
        </StyledHeader>
    )
}

export default Header