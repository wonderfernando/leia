import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html,body{
        font-size: 1rem;
    }
    button{
        cursor: pointer;
    }
    body{
        font-family: "Inter";
        background-color: ${props => props.theme.colors["base-background"]};
    }
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    img{max-width:100%}

.animate{
    animation: anime  500ms forwards;
}
@keyframes anime {
        0% {
            opacity: 0;
            transform: translateX(-50px);
        }
        100%{
            opacity: 100;
            transform: initial
        }
    }
    .animatescale{
        animation: anime-scale  300ms forwards;
    }
    @keyframes anime-scale {
            0% {
                opacity: 0;
                transform: translateY(-80px);
            }
            100%{
                opacity: 100;
                transform: translateY(0);
            }
        }
    .animateModalFade{
        animation: anime-fade  300ms forwards;
    }
    @keyframes anime-fade {
            0% {
                opacity: 0;
                transform: translate(-50%,-80%);
            }
            100%{
                opacity: 100;
                transform: translate(-50%,-50%);
            }
        }

    @media (max-width:520px) {
        html,body 
        {
            font-size: 87.5%;
        }
    }

`


