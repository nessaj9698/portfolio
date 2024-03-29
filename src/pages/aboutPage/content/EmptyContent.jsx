import React from 'react'
import styled from 'styled-components'
import folderImg from '../../../assets/img/icons8-opened-folder.svg'


const StyledEmptyContent = styled.div`
& {
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    grid-area:main;
    width:100%;
        img {
            align-self:flex-end;
        }
       p {
            width:100%;
            text-align:center;
            padding-top:30px;
            align-self:flex-start;
            color:#1E2D3D;
        }
}
@media (max-device-width:768px) {
    & {
       width:100%;
       @media (max-device-height:780px) {
        img {
            display:none;
        }
       }
    }
}
`

function EmptyContent() {
  return (
   <StyledEmptyContent>
       <img src={folderImg}/>
       <p>Папка не выбрана. Пожалуйста, выберите нужную папку</p>
   </StyledEmptyContent>
  )
}

export default EmptyContent