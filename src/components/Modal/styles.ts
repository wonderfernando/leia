import styled from "styled-components";

interface IModal{
    $isOpenModal : boolean
}
export const ModalContainer = styled.div<IModal>`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.625);  
    z-index: 9999999;
    width: 100vw;
    height: 100vh;
    display: ${({$isOpenModal})=> $isOpenModal ? "block" : "none"};
`
export const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-width: 412px;
    width: 100%;
    background: white;
    border-radius: 4px;
   
  
`
export const ButtonCloseModal = styled.button`
    position: absolute;
    right: .5rem;
    top: 0.5rem;
    background-color: transparent;
    border: none;
    outline: transparent;
`
