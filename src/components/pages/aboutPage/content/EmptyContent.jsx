import React from 'react'
import styled from 'styled-components'
import folderImg from '../../../../assets/img/icons8-opened-folder.svg'


const StyledEmptyContent = styled.div`
& {
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    grid-area:main;
    width:143%;
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