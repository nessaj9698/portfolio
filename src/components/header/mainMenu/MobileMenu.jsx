import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledMobileMenu = styled.div`
  display: block;
  position: absolute;
  height: 90vh;
  z-index: 9;
  width: 100vw;
  top: -102vh;
  left: -0;
  background-color: var(--colors-bg);
  transition: 0.3s linear;
  &.opened {
    top: 52px;
  }
  a {
    display: block;
    width: 100% !important;
    border-top: 1px solid #1e2d3d;
    color: var(--colors-text) !important;
    padding: 15px;
  }
`;

function MobileMenu({ setMobileMenuOpened, isMobileMenuOpened }) {
  return (
    <StyledMobileMenu className={isMobileMenuOpened === true ? "opened" : ""}>
      <NavLink
        to="/about"
        onClick={(e) => {
          setMobileMenuOpened();
        }}
      >
        _about-me
      </NavLink>
      <NavLink
        to="/projects"
        onClick={() => {
          setMobileMenuOpened();
        }}
      >
        _projects
      </NavLink>

      <NavLink
        to="/contacts"
        onClick={() => {
          setMobileMenuOpened();
        }}
      >
        _contacts
      </NavLink>
    </StyledMobileMenu>
  );
}

export default MobileMenu;
