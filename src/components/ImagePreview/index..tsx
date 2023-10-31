import { ImagePreviewContainer } from './styles'
import { X } from 'phosphor-react'
interface IImagePreview{
    onClose: ()=>void,
    file: File
}
export default function ImagePreview({file, onClose}: IImagePreview) {
  return (
    <ImagePreviewContainer>
        <button type='button' onClick={onClose}><X size={24} weight='fill'/></button>
        <img src={URL.createObjectURL(file)}alt="" />
    </ImagePreviewContainer>
  )
}
