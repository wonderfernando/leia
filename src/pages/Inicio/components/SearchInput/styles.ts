import styled from "styled-components";

export const SearchinputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
        height: 1rem;
        padding: 1rem;
        border-radius: 100px;
        background-color: ${({theme})=>theme.colors["base-input"]};
        flex: 1;
    input{
        font-size: ${({theme})=>theme.textSizes["text-m"]}; ;
       width: 100%;
       height: 1rem;
       border: none;
       outline: transparent;
       background: transparent;
    }
`