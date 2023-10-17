import styled from "styled-components";

interface IMenu{
    $openMenuToggle: boolean
}
export const HeaderContainer = styled.header<IMenu>`

display: flex;
align-items: center;
width: 100%;
background-color: ${({theme})=> theme.colors["base-title"]};
height: 5rem;
justify-content: space-between;
padding-right: 2rem;
padding-left: 2rem;
h1 a{
    color: #fff;
    font-weight: 900;
}
ul{
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.1rem;
        input{
            padding-left: .5rem;
            border: none;
            outline: transparent;
            height: 1.8rem;
            border-radius: 20px;
            background-color: ${({theme})=>theme.colors["base-text"]};
            &:placeholder{
                color: ${({theme})=>theme.colors["base-input"]}; ;
            }
        }
    }
    a{
        color: #fff;
    }
}
nav{
  
}
@media (max-width: 720px) {
    nav{
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.4);
        min-height: 100vh;
        width:${({$openMenuToggle})=> $openMenuToggle ? "100%" : "0"};
    }
    ul{
        transition: width 500ms;
        background-color: ${({theme})=>theme.colors["base-title"]};
        width: ${({$openMenuToggle})=> $openMenuToggle ? "80%" : "0"};
        overflow: hidden;
        justify-content: start;
        flex-direction: column;
        z-index: 999;
        align-items: flex-start;
        height: 100vh;
        gap: .2rem;
        li{
            padding: .6rem;
            width: 100%;
        }
       input{
        flex: 1;
       }
    }     
}
`

export const ButtonSearch = styled.button`
background: none;
border: none;

`
export const CloseButton = styled(ButtonSearch)`
position: absolute;
right: 0;
top: 0;
display: none;
@media (max-width: 720px){
        display: block;
    }
`
export const MenuContainer = styled.div`
display: flex;
align-items: center;
gap: 1rem;
button{
    background: none;
    border: none;
    outline: transparent;
    display: none;
    @media (max-width: 720px){
        display: block;
    }
}

`
export const ButtonAuth = styled(ButtonSearch)`
background: none;
border: 1px solid ${({theme})=>theme.colors["brand-orange-dark"]};
border-radius: 4px;
height: 2rem;
padding-left: 1rem;
padding-right: 1rem;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
`