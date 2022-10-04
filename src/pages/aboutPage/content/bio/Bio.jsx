// import React, { useState } from 'react'
// import styled from 'styled-components';
// import redFolder from '../../../../assets/img/redFolder.svg'
// import chevron from '../../../../../assets/img/chevron.svg'
// import {useDispatch}  from 'react-redux';
// import { setTab, setOpenedTabs } from '../../../../../redux/reducers/mainReducer';



// const StyledBio = styled.ul`
// & {
//   position:relative;
//   cursor:pointer;
// }
// &:before {
//   position:absolute;
//   left:20px;
//   content:url(${redFolder});
//   width:10px;
// }
// &:after {
//   position:absolute;
//   left:0px;
//   top:0;
//   content:url(${chevron});
//   width:10px;
//   transition:.3s;
// }
// &.expanded:after {
//   transform:rotate(90deg);
// }
// &.expanded > li {
//   display:block;
// }
// & > li {
//   display:none;
//   list-style:none;
//   padding-top:10px;
// }
// `

// function Bio() {
//   const [expanded,setExpanded] = useState(false)
//   const dispatch = useDispatch();


//   const handleChange = (tabName) => {
//    dispatch(setTab(tabName))
//    dispatch(setOpenedTabs(tabName))

//   };

//   return (
//     <StyledBio
   
//     className={expanded === true ? 'expanded' : false}
//     >
//         <span onClick={() => setExpanded(!expanded)}>bio</span>
        
//         <li onClick={ () => {handleChange('MyBio')}}>my-bio.txt</li>
       
//     </StyledBio>
//   )
// }

// export default Bio