import styled from "styled-components";

export const BookContainer = styled.div`

`
export const TopContainer = styled.div`
    display: flex;
    background-image: url("./123.jpeg");
    background-position: center;
    background-size: cover;
    min-height: 10rem;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: center;
    width:  100%;
    > div {
        background-color: rgba(0,0,0,0.5);
        max-width: 920px;
        height: 4rem;
        color: #fff;
        input{
            color: #d1d1d1;
        }
    }
`
export const Content = styled.section`
    padding: 1rem;
    width:  100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    > div{
        flex: 1;
        background-color: white;
        padding: 1rem;
        box-shadow: 5px 5px 50px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }
    
    @media(max-width: 720px){
        flex-direction: column;
    }

`
export const Aside = styled.aside`
  max-width: 250px;
  background-color: white;
  width: 100%;
  padding: 1rem;
  box-shadow: 5px 5px 50px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  li{
    padding: .2rem;
    display: flex;
    gap: .8rem;
    cursor: pointer;
  }
  @media(max-width: 720px){
        max-width: 100%;
    }
`
