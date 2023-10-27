import styled from "styled-components";

interface IImageView{
    $isOpen: boolean
}
export const ImageViewContainer = styled.div<IImageView>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    background-color: rgba(0,0,0,0.4);
     align-items: center;
    justify-content: center;
    display: ${({$isOpen})=> $isOpen ? "flex": "none"};
    > div{
        display: flex;
        flex-direction: column;
        align-items: end;
        background-color: white;
        max-width: 920px;
        max-height: 100vh;
        padding: 1rem;
    }
     button{
        background: transparent;
        outline: none;
        border: none;
    }
    img{
        width:100%;
    }
`