import {styled} from "styled-components";


export const Button = styled.button`
background-color: ${props => props.backgroundColor || '#007bff'};
color: ${props => props.textColor || 'white'};
font-size: ${props => props.fontSize || '16px'};
padding: 10px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
`
