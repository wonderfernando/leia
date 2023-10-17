import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: ${({theme})=>theme.colors["base-title"]};
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color: #fff;
        text-align: center;
    }
`