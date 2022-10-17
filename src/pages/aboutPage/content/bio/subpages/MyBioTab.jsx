import React from 'react'
import Tabs from '../../../../../components/tabs/Tabs'
import CodeBlock from '../../../../../components/common/CodeBlock'




function MyBio() {
    return (
        <Tabs>
           
                <CodeBlock
                className='language-js'
                >
             const greetings = 'Здравствуйте!'
             
                </CodeBlock>
                <p>/ **</p>
              <p>* Меня зовут Вадим и я занимаюсь веб разработкой с 2020 года.</p>
              <p>* Поначалу я, как и многие в этой профессии, разрабатывал сайты на Wordpress, продавая услуги на фриланс бирже.</p>
              <p>* Но спустя какое-то время понял, что хочу начать полноценную карьеру разработчика в IT компании.</p>
              <p>* И тогда я начал изучать React.</p>
              <p>* /</p>
        </Tabs>
    )
}

export default MyBio