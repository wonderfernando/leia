import styled from "styled-components";

export const BookCardContainer = styled.div`
   // padding: 2rem;
    border-radius: 20px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 5px 5px 50px 5px rgba(0, 0, 0, 0.1);
    overflow-x: hidden;
    padding-bottom: 0.5rem;
    min-width: 150px;
   
    span{
        font-weight: bold;
    }
    img{
        width: 290px;
        height: 240px;
    }
    footer{
        display: flex;
        gap: 0.1rem;
        align-items: center;
        justify-content: center;
        padding:.5rem;
        width: 100%;
        font-size: 12px;
    }
    > div{
        padding-left: 1rem;
        padding-right: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const TitleBook  = styled.h2`
    font-size: 15px;
    height: 38px;
    font-family: "Roboto";
    a{
        color: ${({theme})=>theme.colors["brand-orange-dark"]};
    }
`
export const AuthorBook  = styled.span`
 font-weight: 100;
    font-size:12px;
    font-family: "Roboto";
    color: ${({theme})=>theme.colors["base-placeholder"]};
`
export const Gender  = styled.span`
    font-weight: 100;
    font-size:12px;
    color: ${({theme})=>theme.colors["base-placeholder"]};
`