import React from 'react'
import SubMenu from './submenu/SubMenu'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import EmptyContent from './content/EmptyContent';
import CodeExample from './codeExample/CodeExample';
import MyBioTab from './sidebar/personal-info/bio/subpages/myBioTab';
import EducationTab from './sidebar/personal-info/education/subpages/EducationTab';
import CoursesTab from './sidebar/personal-info/education/subpages/CoursesTab';
import HardSkillsTab from './sidebar/personal-info/skills/subpages/HardSkillsTab';
import SoftSkillsTab from './sidebar/personal-info/skills/subpages/SoftSkillsTab';

export const StyledContent = styled.div`
& {
  width:100%;
  display:grid;
  column-gap:30px;
  grid-template-rows:42px 1fr;
  grid-template-areas:
  "tabs tabs"
  "main example"
  ;
  .content-inner {
    
    grid-area:main;
   
  }
  .content-inner-empty {
    width:100%;
    align-self:center;
  }
}
`

function AboutPageContent() {

  const activeTab = useSelector(state => state.main.activeTab)
  return (
    <StyledContent>
      <SubMenu />
      <div className={activeTab ? 'content-inner' : 'content-inner-empty'}>
        {!activeTab && <EmptyContent />}
        {activeTab === 'MyBio' && <MyBioTab />}
        {activeTab === 'Education' && <EducationTab/>}
        {activeTab === 'Courses' && <CoursesTab/>}
        {activeTab === 'HardSkills' && <HardSkillsTab/>}
        {activeTab === 'SoftSkills' && <SoftSkillsTab/>}
      </div>
      {activeTab === 'HardSkills' && <CodeExample /> }
      

    </StyledContent>
  )
}

export default AboutPageContent