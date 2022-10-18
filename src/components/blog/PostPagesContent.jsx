import React from 'react'
import styled from 'styled-components'

export const StyledPostPage = styled.div`
& {
    max-height:100vh;
    overflow-y:scroll;
    width:100%;
    .content-inner {
        display:flex;
        flex-wrap:wrap;
        min-height:80vh;
        overflow-y:scroll;
        column-gap:30px;
        row-gap:60px;
        padding-left:130px;
        padding-top:115px;
    }
  }
  .projects-item {
      width:370px;
      min-height:255px;
      overflow-y:hidden;
      display:flex;
      flex-direction:column;
      max-height:390px;
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
    margin-top:-5px;
   padding:25px 30px;
    background-color:var(--colors-post-bg);
    border-top:1px solid black;
  }
  .projects-item__description {
      color:#607B96;
      margin-bottom:30px;
      flex-grow:1;
  }
  .projects-item__link {
      background-color:var(--colors-post-link);
      border-radius:8px;
      padding:10px 15px;
  }
  .project-logo {
      height:145px;
      border-radius:15px 15px 0 0;
      max-width:100%;
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
  .post__logo-wrapper > img {
      height:200px;
      width:100%;
      object-fit:cover;
  
  }
  @media (max-device-width:768px) {
    & {
        width:100vw;
        padding-bottom:30px;
    }
    .content-inner {
        flex-wrap:wrap;
        width:100vw;
        padding-top:30px;
        padding-left:0;
        row-gap:45px;
        .projects-item {
            width:95%;
            margin:0 auto;
        }
    }
  }
`

function PostPagesContent({children}) {
  return (
    <StyledPostPage>
        {children}
    </StyledPostPage>
  )
}

export default PostPagesContent