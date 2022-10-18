import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledMobileMenu = styled.div`
    display:block;
    position:absolute;
    height:90vh;
    z-index:9;
    width:100vw;
    top:-102vh;
    left:-0;
    background-color:var(--colors-bg);
    transition:.3s linear;
&.opened {
top:6%;
}
    a {
        display:block;
        width:100% !important;
        border-top:1px solid #1E2D3D;
        color:var(--colors-text) !important;
        padding:15px;
    }

`

function MobileMenu({ setMobileMenuOpened, isMobileMenuOpened  }) {
    return (
        <StyledMobileMenu className={isMobileMenuOpened === true ? 'opened' : ''}>
            <NavLink to="/about"
            onClick={(e)=> {
                setMobileMenuOpened()
            }}
            >_about-me</NavLink>
            <NavLink to="/projects"
            onClick={()=> {setMobileMenuOpened()}}
            >_projects</NavLink>
              <NavLink to="/blog"
            onClick={()=> {setMobileMenuOpened()}}
            >_blog</NavLink>
             <NavLink to="/contacts"
            onClick={()=> {setMobileMenuOpened()}}
            >_contacts</NavLink>
        </StyledMobileMenu>
    )
}

export default MobileMenu