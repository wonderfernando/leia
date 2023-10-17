import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .4rem;
  
`
export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .4rem;
    margin-bottom: 2rem;
    span{
        font-weight: 600;
        color: ${({theme})=>theme.colors["brand-orange"]};
    }
    p{
        color: ${({theme})=>theme.colors["base-text"]};
        margin-bottom: .4rem;
        font-size: ${({theme})=>theme.textSizes["text-s"]};;
    }
`
interface Ierror {
    $hasError?: string
}
export const InputStyled = styled.input<Ierror>`
    padding: 1rem;
    width: 100%;
    border: 1px solid transparent;
    outline: transparent;
    border-radius: 6px;
    background-color: ${({theme})=> theme.colors["base-input"]};
    border: ${({theme, $hasError})=> $hasError && `2px solid ${theme.colors["base-error"]}`}
`