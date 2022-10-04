import React from 'react'
import SubMenu from './submenu/SubMenu'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import EmptyContent from './content/EmptyContent';
import CodeExample from './codeExample/CodeExample';
import MyBioTab from './content/bio/subpages/MyBioTab';
import EducationTab from './content/education/subpages/EducationTab';
import CoursesTab from './content/education/subpages/CoursesTab';
import HardSkillsTab from './content/skills/subpages/HardSkillsTab';
import SoftSkillsTab from './content/skills/subpages/SoftSkillsTab';

export const StyledContent = styled.div`
& {
  width:100%;
  display:grid;
  position:relative;
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
    position:absolute;
  }
}
@media (max-device-width:768px) {
  & {
    display:flex;
    flex-wrap:wrap;
    position:static;
  }
  .content-inner {
    width:95%;
    margin:0 auto;
  }
  .content-inner-empty {
   bottom:50px;
  }
  pre {
    display:inline-grid;
  }
}
`

function AboutPageContent() {

  const activeTab = useSelector(state => state.aboutPageTabs.activeTab)
  const openedTabs = useSelector(state => state.aboutPageTabs.openedTabs)
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