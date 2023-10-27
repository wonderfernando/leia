import styled from "styled-components";

export const BookContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
 
`

export const Content = styled.div`
  display: flex;
  margin-top: 2rem;
    gap: 2rem;
    overflow: hidden;
    box-shadow: 5px 5px 50px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    > img{
        max-width: 280px;
        width: 100%;
        object-fit: cover;
        min-height: 280px;
        cursor: pointer;
    }
    > div{
        display: flex;
        flex-direction: column;
        gap: .2rem;
        padding-top: 1rem;
    }
    span:nth-child(4){
        display: flex;
        gap: .2rem;
        align-items: center;
    }
    @media(max-width: 520px){
        flex-direction: column;
        gap: .5rem;
        justify-content: center;
        padding: 1rem;
        padding-bottom: 2rem;
        img{
            width: 100%;
        }
    }
`
export const RelatedContent = styled.div`
    margin-bottom: 2rem;
`
export const ImgView = styled.div`

`
