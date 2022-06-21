import React from 'react'
import styled from 'styled-components'
import triangle from '../../../../assets/img/Vector.svg'
import mail from '../../../../assets/img/mail-icon.svg'
import phone from '../../../../assets/img/phone-icon.svg'
import PersonalInfoFolders from './personal-info/personalInfoFolders'

export const StyledSidebar = styled.div`
&  {
    border:1px solid #1E2D3D;
    border-top:none;
    .sidebar__title.contacts {
      border-top:1px solid #1E2D3D;
    }
    .contacts__item {
      color:#607B96;
      padding-left:40px;
      margin:15px 0;
      position:relative;
    }
    .mail:before,
    .phone:before {
      position:absolute;
      left:10px;
    }
    .mail:before {
      content:url(${mail});
      top:4px;
    }
    .phone:before {
      content:url(${phone});
    }
    .sidebar__title {
      padding:10px 25px;
      border-bottom: 1px solid #1E2D3D;
      position:relative;
      &:before {
        content:url(${triangle});
        position:absolute;
        left:5px;
      }
    }
  a {
    color:#607B96;
  }
`

function Sidebar() {
  return (
    <StyledSidebar>
        <p className='sidebar__title'>personal-info</p>
        <PersonalInfoFolders/>
        <p className='sidebar__title contacts'>contacts</p>
        <p className='contacts__item mail'><a href='mailto:nessajdev@gmail.com'>nessajdev@gmail.com</a></p>
        <p className='contacts__item phone'><a href="https://tlgg.ru/nessaj9698">+79965952806</a></p>
    </StyledSidebar>
  )
}

export default Sidebar
