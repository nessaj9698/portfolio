import React from 'react';
import styled from 'styled-components';
import Bio from '../../content/bio/Bio';
import Education from '../../content/education/Education';
import Skills from '../../content/skills/Skills';
import SidebarFolder from '../../../../components/sidebar/sidebarFolders/SidebarFolders';
import { useDispatch } from 'react-redux';
import { setTab, setOpenedTabs } from '../../../../redux/reducers/aboutPageTabsReducer';


const StyledInfo = styled.div`
& {
    padding:20px 35px;
}
& > ul {
  position:relative;
}
`

function PersonalInfo() {
  const dispatch = useDispatch();


const handleChange = (tabName) => {
 dispatch(setTab(tabName))
 dispatch(setOpenedTabs(tabName))

};

 
  return (
    <StyledInfo>
     <SidebarFolder title="bio" color="red">
     <li onClick={ () => {handleChange('MyBio')}}>my-bio.txt</li>
     </SidebarFolder>
     <SidebarFolder title="education" color="blue">
     <li onClick={ () => {handleChange('Education')}}>education.txt</li>
        <li onClick={ () => {handleChange('Courses')}}>courses.txt</li>
      </SidebarFolder>
      <SidebarFolder title="skills" color="green">
      <li onClick={ () => {handleChange('HardSkills')}}>hard-skills</li>
        <li onClick={ () => {handleChange('SoftSkills')}}>soft-skills</li>
      </SidebarFolder>
        {/* <Bio />
        <Education /> 
        <Skills />  */}
        
      
      
    </StyledInfo>
  )
}

export default PersonalInfo