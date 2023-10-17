import styled from "styled-components";

export const BookListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
    @media (max-width: 920px) {
        grid-template-columns: repeat(3,1fr);
    }
    @media (max-width: 720px) {
        grid-template-columns: repeat(2,1fr);
    }
    
    @media (max-width: 420px) {
        grid-template-columns: 1fr;
    }
`