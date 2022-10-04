import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTab, setOpenedTabs } from '../../../redux/reducers/aboutPageTabsReducer'
import styled from 'styled-components'
import redFolder from '../../../assets/img/redFolder.svg'
import blueFolder from '../../../assets/img/blueFolder.svg'
import greenFolder from '../../../assets/img/greenFolder.svg'
import chevron from '../../../assets/img/chevron.svg'

const StyledSidebarFolder = styled.ul`
  & {
  position:relative;
  cursor:pointer;
}
&.red:before {
  content:url(${redFolder});
}
&.blue:before {
  content:url(${blueFolder});
}
&.green:before {
  content:url(${greenFolder});
}
&:before {
  position:absolute;
  left:20px;
  width:10px;
}
&:after {
  position:absolute;
  left:0px;
  top:0;
  content:url(${chevron});
  width:10px;
  transition:.3s;
}
&.expanded:after {
  transform:rotate(90deg);
}
&.expanded > li {
  display:block;
}
& > li {
  display:none;
  list-style:none;
  padding-top:10px;
}
`

function SidebarFolder({ children, title, color }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <StyledSidebarFolder
      className={expanded === true ? 'expanded ' + color : color}
      onClick={() => setExpanded(!expanded)}
    >
      <span>
        {title}
      </span>
      {children}
    </StyledSidebarFolder>
  )
}

export default SidebarFolder