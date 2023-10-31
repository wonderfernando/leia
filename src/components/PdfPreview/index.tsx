
import { PdfPreviewContainer } from './styles'
import pdfImg from "../../assets/pdf.png"
import { X } from 'phosphor-react'
interface IPdfPreview {
    onClose: ()=>void,
    file: File
}

export default function PdfPreview({file, onClose} : IPdfPreview) { 
  return (
    <PdfPreviewContainer>
        <div>
            <img width="24px" src={pdfImg} alt="" />
            <span>{file.name}</span>
        </div>
        <button onClick={onClose}><X size={24}/></button>
    </PdfPreviewContainer>
  )
}
