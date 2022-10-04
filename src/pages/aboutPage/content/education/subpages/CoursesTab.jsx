import React from 'react'
import Highlight from 'react-highlight'
import arta from '../../../../../../node_modules/highlight.js/styles/arta.css'
import styled from 'styled-components'
import Tabs from '../../../../../components/tabs/Tabs'


function CoursesTab() {
    return (
        <Tabs>
            <Highlight
                className='javascript'
            >
              const coursesCost = 0

            </Highlight>
            <p>/ **</p>
            <p>* Постигая азы веб разработки в целом и фронтенда в частности я изучил множество учебных материалов.</p>
            <p>* Из полноценных, запомнившихся курсов могу отметить:</p>
            <p>* React: путь самурая (it-kamasutra)</p>
            <p>* JavaScript 2.0 (Александр Лущенко)</p>
            <p>* Литература:</p>
            <p>* Выразительный JavaScript (Marijn Haverbeke)</p>
            <p>* На всё своё обучение я не потратил ни рубля, поскольку убеждён, что лучшие компаньоны знаний - это труд и упорство, а не размер кошелька</p>
            <p>* /</p>
        </Tabs>
    )
}

export default CoursesTab