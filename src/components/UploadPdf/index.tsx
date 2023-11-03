import { useState } from 'react'
import { UploadPdfContainer } from './styles'
import {useDropzone} from "react-dropzone"
import PdfPreview from '../PdfPreview'
import {useFormContext} from "react-hook-form"
import { typeForm } from '../ModalCreateBook'
import Error from '../Error'

export default function UploadPdf() {
   const [file,setFile] = useState<File|null>()
 
    const {register, formState} = useFormContext<typeForm>()
const {onChange, name,...rest} = register("pdf")
function onClose() {
    setFile(null)
}
    const {getInputProps,getRootProps, isDragAccept,isDragActive,isDragReject} = useDropzone({
        accept:{
            "application/pdf": [".pdf"]
        },
        onDrop: (files) => {
             setFile(files[0])
             onChange({target: {value: files[0], name: name}})
        }
    })
if(file)
    return <PdfPreview file={file} onClose={onClose}/>
  return (
    <UploadPdfContainer $isDragAccept={isDragAccept} $isDragActive={isDragActive} $isDragReject={isDragReject} {...getRootProps()} >
        <p>Enviar livro</p>
        <span>O arquivo deve estar no formato PDF</span>
        <button type='button'>Enviar ficheiro</button>
        <input {...rest} name={name} {...getInputProps()}  type='hidden'/>
        {formState.errors.pdf?.message && <Error>{formState.errors.pdf.message}</Error>}
    </UploadPdfContainer>
  )
}
