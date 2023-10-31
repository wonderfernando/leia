import styled from "styled-components";
import { css } from "styled-components";

interface IUploadPdfContainer{
    $isDragAccept:boolean,
    $isDragActive:boolean,
    $isDragReject:boolean
}
export const UploadPdfContainer = styled.div<IUploadPdfContainer>`
display: flex;
flex-direction: column;
justify-content: center;
color: ${({theme})=> theme.colors["base-text"]};
 background-color: #f4f4f4;
 padding:1rem;
 border-radius: 4px;
 border: 1px dashed #333;
p{
    font-size: 12px;
    font-weight: 600;
}
span{
    font-size: 10px;
    margin-bottom: .5rem;
}
button{
    width: 100%;
    height: 1.8rem;
    color: ${({theme})=> theme.colors["base-title"]};
    background: ${({theme})=>theme.colors["brand-orange-dark"]};
    border:none;
    outline: transparent;
    border-radius: 4px;
    color: #d1d1d1;
    font-size: 10px;
    transition: 300ms;
    &:hover{
            background-color:  ${({theme})=>theme.colors["brand-orange"]};;
        }
}
${ ({$isDragActive,$isDragAccept}) => $isDragActive && $isDragAccept && css`border-color: #78e575; background-color:#78e57501` }
  ${ ({$isDragActive,$isDragReject}) => $isDragActive && $isDragReject && css`border-color: #e57878; color:#e57878` }

`