import  { useState } from 'react'
import { UploadImageContainer } from './styles'
import { Prohibit, Image } from 'phosphor-react'
import {useDropzone} from "react-dropzone"
import ImagePreview from '../ImagePreview/index.'

function UploadImage() {
    const [file,setFile] = useState<File | null>()
    function onDrop(files: File[]) {
        setFile(files[0])
        console.log(file)
    }
const {getInputProps,getRootProps,isDragAccept,isDragReject,isDragActive} = useDropzone({
    accept: {
        "image/jpeg": [".jpeg", ".jpg"],
        "image/png": [".png"],
    },
    onDrop: onDrop
})
function onClose() {
    setFile(null)
}

if(file)
    return <ImagePreview onClose={onClose} file={file}/>
return (
    <UploadImageContainer $isDragReject={isDragReject} $isDragActive={isDragActive} $isDragAccept={isDragAccept} {...getRootProps()}>
        { isDragActive && isDragAccept && <><Image size={24}/> <p>Solte para adicionar</p></>}
        { isDragActive && isDragReject && <><Prohibit size={24}/>  <p>Ficheiro não suportado</p></>}
        { !isDragActive && <><Image size={24}/> <p>Clique para adicionar a imagem sou arraste largue aqui!</p></> }
    
        <input {...getInputProps()} type="hidden" />
    </UploadImageContainer>
  )
}



export default UploadImage