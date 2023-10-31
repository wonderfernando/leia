import styled from "styled-components";

export const PdfPreviewContainer = styled.div`
display: flex;

 color: ${({theme})=> theme.colors["base-text"]};
 background-color: #f4f4f4;
 padding:1rem;
 border-radius: 4px;
 border: 1px dashed #333;
> div{
    flex:1;
    display: flex;
    gap: .5rem;
    align-items: center;
}

span{
    font-size: 10px;
}
button{
    background: none;
    border:none;
    outline: transparent;
    
}
`