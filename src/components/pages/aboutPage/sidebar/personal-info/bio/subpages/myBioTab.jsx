import React, { useEffect, useState } from 'react'
import Highlight from 'react-highlight'
import arta from '../../../../../../../../node_modules/highlight.js/styles/arta.css'
import styled from 'styled-components'
import { Octokit } from '@octokit/core'

const StyledBioTab = styled.div`
& {
    padding-left:40px;
    p {
        color: #607B96;
    }
}
`





function MyBio() {

    
    return (
        <StyledBioTab>
           
                <Highlight 
                className='javascript'
                >
             const greetings = 'Здравствуйте!'
             
                </Highlight>
                <p>/ **</p>
              <p>* Меня зовут Вадим и я занимаюсь веб разработкой с 2020 года.</p>
              <p>* Поначалу я, как и многие в этой профессии, разрабатывал сайты на Wordpress, продавая услуги на фриланс бирже.</p>
              <p>* Но спустя какое-то время понял, что хочу начать полноценную карьеру разработчика в IT компании.</p>
              <p>* И тогда я начал изучать React.</p>
              <p>* /</p>
        </StyledBioTab>
    )
}

export default MyBio