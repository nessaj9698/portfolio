import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledMobileMenu = styled.div`
    display:block;
    position:absolute;
    height:100vh;
    z-index:9;
    width:100vw;
    top:-102vh;
    left:-10px;
    background-color:var(--colors-bg);
    transition:.3s linear;
&.opened {
top:185%;
}
    a {
        display:block;
        width:100% !important;
        border-bottom:1px solid #1E2D3D;
        color:var(--colors-text) !important;
        padding:15px;
    }

`

function MobileMenu({ isMobileMenuOpened, setMobileMenuOpened }) {
    return (
        <StyledMobileMenu className={isMobileMenuOpened === true ? 'opened' : ''}>
            <Link to="/about"
            onClick={()=> {setMobileMenuOpened()}}
            >_about-me</Link>
            <Link to="/projects"
            onClick={()=> {setMobileMenuOpened()}}
            >_projects</Link>
              <Link to="/blog"
            onClick={()=> {setMobileMenuOpened()}}
            >_blog</Link>
             <Link to="/contacts"
            onClick={()=> {setMobileMenuOpened()}}
            >_contacts</Link>
        </StyledMobileMenu>
    )
}

export default MobileMenu