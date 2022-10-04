import React from 'react'
import StyledSidebar from '../../../components/sidebar/Sidebar'

function ContactsPageSidebar() {
  return (
        <StyledSidebar>
        <p className='sidebar__title'>контакты</p>
        <p className='contacts__item mail'><a href='mailto:nessajdev@gmail.com'>nessajdev@gmail.com</a></p>
        <p className='contacts__item phone'><a href="https://tlgg.ru/nessaj9698">+79965952806</a></p>
        <p className='sidebar__title contacts'>другие_площадки</p>
        <p className='contacts__item link'><a href='https://vk.com/roundnround'>VK</a></p>
        <p className='contacts__item link'><a href="https://tlgg.ru/nessaj9698">Telegram</a></p>
        <p className='contacts__item link'><a href="https://github.com/nessaj9698">GitHub</a></p>
        <p className='contacts__item link'><a href="https://https://kwork.ru/user/worldwideart">Kwork</a></p>
        </StyledSidebar>
  )
}

export default ContactsPageSidebar