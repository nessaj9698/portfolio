import React from 'react'
import { useSelector } from 'react-redux'
import ActiveFilters from './submenu/ActiveFilters'
import { useState } from 'react'
import PlanIt from '../../../assets/img/PlanIt.webp'
import voltekh from '../../../assets/img/voltekh.jpg'
import avtosalon from '../../../assets/img/автосалон.webp'
import iprofi from '../../../assets/img/apple-thumb.jpg'
import reactIcon from '../../../assets/img/small-icon-react.svg'
import wpIcon from '../../../assets/img/small-icon-wordpress.svg'
import PostPagesContent from '../../../components/blog/PostPagesContent'



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
    },
    {
        title: 'Prime Motors',
        description: 'Сайт Вологодского автодилера',
        photo: `${avtosalon}`,
        icon: `${wpIcon}`,
        type: 'Wordpress',
        link: 'https://prime-motors35.ru'
    },
    {
        title: 'Iprofi',
        description: 'Интернет магазин техники Apple',
        photo: `${iprofi}`,
        icon: `${wpIcon}`,
        type: 'Wordpress',
        link: 'https://iprofi35.ru/'
    }]
    const [posts, setPosts] = useState(postList)

    return (
        <PostPagesContent>
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
                                <a href={post.link} className='projects-item__link'>увидеть_вживую</a>
                            </div>

                        </div>
                    )}
            </div>
        </PostPagesContent>
    )
}

export default ProjectsPageContent