import {styled} from "styled-components";

export const Paragraph = styled.p`
// color:#FB1779;
color :${(props) => props.color || "#fb1779"};
font-weight:bold;
font-size:10px;

`
export const Main = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 60px;

`