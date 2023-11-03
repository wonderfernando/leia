import styled from "styled-components";

export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    background-image: url("../123.jpeg");
    background-position: center;
    background-size: cover;
    width: 100%;
 
    > div{
        max-width: 700px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 1rem;
        padding-right: 1rem;
        h1{
            font-size: 56px;
            color: #fff;
            
        }
    }
`