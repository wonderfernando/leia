import { useState } from 'react'
import { UploadPdfContainer } from './styles'
import {useDropzone} from "react-dropzone"
import PdfPreview from '../PdfPreview'
export default function UploadPdf() {
   const [file,setFile] = useState<File|null>()
    const {getInputProps,getRootProps, isDragAccept,isDragActive,isDragReject} = useDropzone({
        accept:{
            "application/pdf": [".pdf"]
        },
        onDrop: (files) => setFile(files[0])
    })


function onClose() {
    setFile(null)
}
console.log(file)
if(file)
    return <PdfPreview file={file} onClose={onClose}/>
  return (
    <UploadPdfContainer $isDragAccept={isDragAccept} $isDragActive={isDragActive} $isDragReject={isDragReject} {...getRootProps()} >
        <p>Enviar livro</p>
        <span>O arquivo deve estar no formato PDF</span>
        <button type='button'>Enviar ficheiro</button>
        <input {...getInputProps()}  type='hidden'/>
    </UploadPdfContainer>
  )
}
