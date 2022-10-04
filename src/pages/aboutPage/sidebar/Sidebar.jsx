import React from 'react'
import PersonalInfoFolders from './personal-info/personalInfoFolders'
import StyledSidebar from '../../../components/sidebar/Sidebar'

function Sidebar() {
  return (
    <StyledSidebar>
        <p className='sidebar__title'>личная_информация</p>
        <PersonalInfoFolders/>
        <p className='sidebar__title contacts'>контакты</p>
        <p className='contacts__item mail'><a href='mailto:nessajdev@gmail.com'>nessajdev@gmail.com</a></p>
        <p className='contacts__item phone'><a href="https://tlgg.ru/nessaj9698">+79965952806</a></p>
    </StyledSidebar>
  )
}

export default Sidebar
