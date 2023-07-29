import styled from "styled-components"


export const Header = styled.header`
background-color:gray;
display: flex;
width:100vw;
height:30px;
align-items: center;
// display: flex;
justify-content: space-between
`

export const ListItems = styled.ul`
list-style: none;
display: flex;
`
export const Heading = styled.h4`
color: 0D0E43;
font-size: 24px;
font-weight: bold;
border:1px solid 000000;
display: flex;
align-items: center;
`
export const Items = styled.li`
margin-right: 10px;
color: 0D0E43;
font-size:16px;
`
export const InputField = styled.input`
background-color:gray;
color:white;
width: 200px;
height:20px;
`

export const Button = styled.button`
background-color:#FB1779;
color:white;

`
export const Container = styled.div`
 
display: flex;
border: 1px solid white;
background-color: ${(props) => props.backgroundColor || "F2F0FF"};
width: ${(props) => props.width || ""};
height: ${(props) => props.height || ""};
flex-direction:${(props) => props.flexDirection || ""};


`