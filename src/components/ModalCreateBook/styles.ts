import styled from "styled-components"

export const ModalContent = styled.div`
 
`
export const DropContainer = styled.div`

`
export const ModalHeader = styled.header`
width: 100%;
h1{
    text-align: center;
     font-size: 16px;
     color: ${({theme}) => theme.colors["base-title"]};
  }
  border-bottom: 1px solid #d1d1d1;
  margin-bottom: 2rem;
  padding-bottom: .5rem;
  padding-top: .5rem;
`
export const ModalBody = styled.div`
  padding: 1rem;
  overflow-y: scroll;
  max-height: 520px;
  padding-bottom: 2rem;
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  scroll-behavior: smooth;
`