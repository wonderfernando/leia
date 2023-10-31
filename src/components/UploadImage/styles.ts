import styled, { css } from "styled-components";
interface IUploadImageContainer{
    $isDragReject: boolean,
    $isDragActive:boolean,
    $isDragAccept:boolean
}
export const UploadImageContainer = styled.div<IUploadImageContainer>`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  border: 1px dashed #333;
  &:hover{
    background-color: #ddd;
  }
  cursor: pointer;
  transition: 300ms;
  p{
    font-size: 12px;
  }

  ${ ({$isDragActive,$isDragAccept}) => $isDragActive && $isDragAccept && css`border-color: #78e575; background-color:#78e57501` }
  ${ ({$isDragActive,$isDragReject}) => $isDragActive && $isDragReject && css`border-color: #e57878; color:#e57878` }
`