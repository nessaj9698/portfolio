// import React, { useState } from 'react'
// import styled from 'styled-components';
// import blueFolder from '../../../../assets/img/blueFolder.svg'
// import chevron from '../../../../assets/img/chevron.svg'
// import { useDispatch } from 'react-redux';
// import { setTab, setOpenedTabs } from '../../../../../redux/reducers/mainReducer';


// const StyledEducation = styled.ul`
// & {
//   position:relative;
//   cursor:pointer;
// }
// &:before {
//   position:absolute;
//   left:20px;
//   content:url(${blueFolder});
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

// function Education() {
//   const [expanded,setExpanded] = useState(false)
//   const dispatch = useDispatch();


//   const handleChange = (tabName) => {
//    dispatch(setTab(tabName))
//    dispatch(setOpenedTabs(tabName))

//   };

//   return (
//     <StyledEducation
//     className={expanded === true ? 'expanded' : false}
//     >
//       <span onClick={() => setExpanded(!expanded)}
//     >
//         education</span>
//         <li onClick={ () => {handleChange('Education')}}>education.txt</li>
//         <li onClick={ () => {handleChange('Courses')}}>courses.txt</li>
        
//     </StyledEducation>
//   )
// }

// export default Education