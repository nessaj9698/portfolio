import React from 'react'
import styled from 'styled-components'

const StyledBurger = styled.div`
    position: relative;
    z-index:99;
  display: none;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 15px;
  cursor: pointer;
  transition: all .5s ease-in-out;
    .menu-btn__burger {
    width: 30px;
  height: 4px;
  background: var(--colors-text);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
        &:before,
        &:after {
            content: '';
            position: absolute;
            width: 30px;
            height: 4px;
            background: var(--colors-text);
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(255,101,47,.2);
            transition: all .5s ease-in-out;
        }
        &:before {
            transform: translateY(-12px);
        }
        &:after {
            transform: translateY(12px);
        }
    }
@media (max-device-width:768px) {
    display:flex;
}
`

function Burger(props) {
    return (
        <StyledBurger className={props.isMobileMenuOpened === true ? 'menu-btn open mobile' : 'menu-btn mobile'}>
          
          <div className='menu-btn__burger'
          onClick={props.onClick}
          ></div>
            </StyledBurger>
    )
}

export default Burger