import styled from "styled-components";

export const SearchinputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
        height: 1rem;
        padding: 1rem;
        border-radius: 100px;
         flex: 1;
         color: #d1d1d1;
        background-color: rgba(0,0,0,0.5);
    input{
        font-size: ${({theme})=>theme.textSizes["text-m"]}; ;
       width: 100%;
       color: #d1d1d1;
       height: 1rem;
       border: none;
       outline: transparent;
       background: transparent;
    }
`