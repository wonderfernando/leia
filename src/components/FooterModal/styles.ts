import styled from "styled-components";

export const FooterModalContainer = styled.div`
display: flex;
align-items: center;
gap: .4rem;

button{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: transparent;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 700;
    padding:.6rem;
    transition: 300ms;
    &:first-child{
        color: ${({theme})=> theme.colors["base-text"]};
        &:hover{
            background-color: #d1d1d1; 
        }
    }
    &:last-child{
        color: ${({theme})=> theme.colors["base-white"]};
        background-color: ${({theme})=>theme.colors["brand-orange-dark"]};
        &:hover{
            background-color:  ${({theme})=>theme.colors["brand-orange"]};;
        }
    }
}
`