import React from 'react'
import { StyledInnerPage } from '../aboutPage/Aboutpage'
import ProjectsSidebar from './sidebar/ProjectsSidebar'
import ProjectsPageContent from './content/ProjectsPageContent'

function ProjectsPage() {
  return (
    <StyledInnerPage>
        <ProjectsSidebar/>
        <ProjectsPageContent/>
    </StyledInnerPage>
  )
}

export default ProjectsPage