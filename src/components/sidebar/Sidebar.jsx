import styled from 'styled-components'
import triangle from '../../assets/img/Vector.svg'
import mail from '../../assets/img/mail-icon.svg'
import phone from '../../assets/img/phone-icon.svg'
import link from '../../assets/img/link.svg'

const StyledSidebar = styled.div`
&  {
    border:1px solid #1E2D3D;
    border-top:none;
   
    .sidebar__title.contacts {
      border-top:1px solid #1E2D3D;
    }
    .contacts__item {
      color:var(--colors-text);
      padding-left:40px;
      margin:15px 0;
      position:relative;
    }
   
    .mail:before,
    .phone:before,
    .link:before {
      position:absolute;
      left:10px;
    }
    .link:before {
        content:url(${link});
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
    color:var(--colors-text);
  }
  @media (max-device-width:768px) {
    .sidebar__title {
      border-top:1px solid #1E2D3D;
    }
  }
`


export default StyledSidebar