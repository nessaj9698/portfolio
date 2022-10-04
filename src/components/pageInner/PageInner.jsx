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
       position:relative
    }
}
`

export default StyledInnerPage