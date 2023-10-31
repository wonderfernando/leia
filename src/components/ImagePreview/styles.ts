import styled from "styled-components";

export const ImagePreviewContainer = styled.div`
    position: relative;
    max-height: 232px;
    border-radius: 4px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #f1f1f1;
   padding: 0.5rem;
    img{
        border-radius: 4px;
        max-height: 200px;
        width: 100%;
        object-fit: cover;
    }
    button{
        position: absolute;
        right: 1rem;
        top: 1rem;
        border: 0;
        outline: none;
        background: transparent;
        cursor: pointer;
        color: #fff;
    }
`