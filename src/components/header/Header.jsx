import React from "react";
import styled from 'styled-components';
import MainMenu from "./mainMenu/MainMenu";

const StyledHeader = styled.div`
display:flex;
width:100%;
justify-content:space-between;
align-items:center;
border-bottom:1px solid #1E2D3D;
& > p {
    color: #607B96;
    min-width:150px;
}
`



const Header = () => {
    return (
        <StyledHeader>
            <MainMenu/>
            <p>
                _contact-me
            </p>
        </StyledHeader>
    )
}

export default Header