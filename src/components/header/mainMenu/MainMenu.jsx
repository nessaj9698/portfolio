import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";

const StyledMainMenu = styled.nav`
width:100%;
display:flex;

& > ul > a {
    color: #607B96;
    padding:17px 32px;
    border: 1px solid #1E2D3D;
    border-bottom:none;
    text-decoration:none;
}
& > a {
    color: #607B96;
    text-decoration:none;
    align-self:center;
    padding:17px 155px 17px 22px;
    width:300px;
}
& > ul {
    display:flex;
    align-items:center;
    padding-left:0;
}
`


const MainMenu = () => {
    return (
       <StyledMainMenu>
           <Link to="/">Home</Link>
         
         
         
          <ul>
          <Link to="/about">_about-me</Link>
          <Link to="/projects">_projects</Link>
            
          </ul>
        
       </StyledMainMenu>
    )
}

export default MainMenu