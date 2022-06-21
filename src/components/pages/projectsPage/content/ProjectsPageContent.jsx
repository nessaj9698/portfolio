import React from 'react'
import { useSelector } from 'react-redux'
import ActiveFilters from './submenu/ActiveFilters'
import { useState } from 'react'
import photo from '../../../../assets/img/postPhoto.png'
import styled from 'styled-components'
import PlanIt from '../../../../assets/img/PlanIt.webp'
import voltekh from '../../../../assets/img/voltekh.jpg'
import reactIcon from '../../../../assets/img/small-icon-react.svg'
import wpIcon from '../../../../assets/img/small-icon-wordpress.svg'

const StyledProjectsPage = styled.div`
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
        display:flex;
        column-gap:30px;
        padding-left:130px;
        padding-top:115px;
    }
  }
  .projects-item {
      width:370px;
      max-height:360px;
      overflow-y:hidden;
      display:flex;
      flex-direction:column;
  }
  .projects-item__title {
      margin-bottom:15px;
      color:#5565E8;
  }
  .projects-item__bottom {
     display:flex;
     flex-grow:1;
     align-items:flex-start;
     flex-direction:column;
    margin-top:-6px;
   padding:25px 30px;
    background-color:#011221;
  }
  .projects-item__description {
      color:#607B96;
      margin-bottom:30px;
      flex-grow:1;
  }
  .projects-item__link {
      background-color:#1C2B3A;
      border-radius:8px;
      padding:10px 15px;
  }
  .project-logo {
      height:145px;
      border-radius:15px 15px 0 0;
  }
  .icon {
      width:25px;
      height:25px;
      padding:5px;
      background-color:#86E1F9;
      position:absolute;
      top:20px;
      right:15px;
  }
  .projects-item__logo-wrapper {
      position:relative;
  }
`

function ProjectsPageContent() {
    const currentFilters = useSelector(state => state.filter.selectedFilters)

    const postList = [{
        title: 'Timeplanner',
        description: 'Планировщик задач с авторизацией, календарём и прогнозом погоды',
        photo: `${PlanIt}`,
        icon: `${reactIcon}`,
        type: 'React',
        link: 'https://nessaj9698.github.io/TimePlanner/'
    },
    {
        title: 'Voltekh',
        description: 'Сайт по продаже сельскохозяйственной техники',
        photo: `${voltekh}`,
        icon: `${wpIcon}`,
        type: 'Wordpress',
        link: 'https://voltekh.ru'
    }]
    const [posts, setPosts] = useState(postList)

    return (
        <StyledProjectsPage>
            <ActiveFilters />
            <div className="content-inner">
                {posts.filter(post => {
                    return currentFilters.includes(post.type)
                })
                    .map((post) =>
                        <div className='projects-item'>
                            <p className='projects-item__title'>{post.title}</p>
                            <div className="projects-item__logo-wrapper">
                                <img src={post.icon} alt="react" className='icon' />

                                <img src={post.photo} alt="" className='project-logo' />
                            </div>
                            <div className="projects-item__bottom">
                                <p className='projects-item__description'>{post.description}</p>
                                <a href={post.link} className='projects-item__link'>view-project</a>
                            </div>

                        </div>
                    )}
            </div>
        </StyledProjectsPage>
    )
}

export default ProjectsPageContent