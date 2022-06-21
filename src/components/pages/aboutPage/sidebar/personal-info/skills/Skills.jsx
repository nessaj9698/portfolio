import React, { useState } from 'react'
import styled from 'styled-components';
import greenFolder from '../../../../../../assets/img/greenFolder.svg'
import chevron from '../../../../../../assets/img/chevron.svg'
import { Route, Routes, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTab, setOpenedTabs } from '../../../../../../redux/reducers/mainReducer';


const StyledSkills = styled.ul`
& {
  position:relative;
  cursor:pointer;
}
&:before {
  position:absolute;
  left:20px;
  content:url(${greenFolder});
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

function Skills() {
  const [expanded,setExpanded] = useState(false)
  const dispatch = useDispatch();


  const handleChange = (tabName) => {
   dispatch(setTab(tabName))
   dispatch(setOpenedTabs(tabName))

  };

  return (
    <StyledSkills
    
    className={expanded === true ? 'expanded' : false}
    >
        <span onClick={() => setExpanded(!expanded)}>skills</span>
        <li onClick={ () => {handleChange('HardSkills')}}>hard-skills</li>
        <li onClick={ () => {handleChange('SoftSkills')}}>soft-skills</li>
    </StyledSkills>
  )
}

export default Skills