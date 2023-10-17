import styled from "styled-components";

export const ButtonContainer = styled.button`
    height: 3rem;
    width: 100%;
    padding: 1rem;
    color: #fff;
    display: flex;
    align-items: center;
    border: transparent;
    font-weight: bold;

    justify-content: center;
    background-color: ${({theme})=>theme.colors["brand-orange"]};
    border-radius: 8px;
    transition: 300ms;
    font-size: ${({theme})=>theme.textSizes["text-m"]};;
    &:hover{
        background-color: ${({theme})=>theme.colors["brand-orange-dark"]};
    }
`