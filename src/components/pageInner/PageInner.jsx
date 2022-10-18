import styled from 'styled-components'

const StyledInnerPage = styled.div`
& {
    display:grid;
    grid-template-columns:300px 1fr;
    height:100%;
}
@media (max-device-width:768px) {
    & {
       display:block;
       position:relative;
       overflow-y:scroll;
       height:87vh;
       width:100vw;
    }
}
`

export default StyledInnerPage