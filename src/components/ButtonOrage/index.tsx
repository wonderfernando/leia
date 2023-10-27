import { ReactNode } from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: #fff;
    border: none;
    outline: transparent;
    height: 2rem;
    border-radius: 4px;
    background: #ec8004;
    transition: 300ms;
    &:hover{
        background: #C86C00;
    }
`

export default function ButtonOragen({children,onClick}: {children: ReactNode,onClick?:()=>void}) {
    return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}