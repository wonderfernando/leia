import styled from "styled-components";

export const LoginContainer = styled.div`
    background-color: ${({theme}) => theme.colors["base-white"]};
    max-width: 420px;
   
    margin: 10rem auto;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 5px 5px 50px 5px rgba(0, 0, 0, 0.1);
    gap: 2rem;
       padding-top:2rem;
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    a{
        margin-top: .875rem;
        color: ${({theme}) => theme.colors["base-text"]};
    }
    @media (max-width:450px){
       width: 100%;
       margin-top: 100px;
    }
`