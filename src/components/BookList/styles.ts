import styled from "styled-components";

interface IBookList{
    $isOnGender?: boolean
} 
export const BookListContainer = styled.div<IBookList>`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
    @media (max-width: 1100px) {
        grid-template-columns: ${({$isOnGender})=> $isOnGender ?  "repeat(3,1fr)" : "repeat(4,1fr)"} ;
    }
    @media (max-width: 920px) {
        grid-template-columns: ${({$isOnGender})=> $isOnGender ?  "repeat(2,1fr)" : "repeat(3,1fr)"} ;
    }
    @media (max-width: 720px) {
        grid-template-columns: repeat(2,1fr);
        gap: 1rem;
    }
    
    @media (max-width: 420px) {
        grid-template-columns: 1fr;
    }
`