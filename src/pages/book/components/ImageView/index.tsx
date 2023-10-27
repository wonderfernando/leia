import { X } from "phosphor-react";
import { ImageViewContainer } from "./styles";

interface IImageView{
    src?: string,
    isOpen:boolean,
    setIsOpenModal:()=>void
}
export default function ImageView ({src,isOpen,setIsOpenModal}: IImageView) {
    return (
        <ImageViewContainer $isOpen={isOpen}>
            <div className="animate">
               <button onClick={()=>setIsOpenModal()}><X size={28}color="#000"/></button>
                <img src={`../${src}`} alt="" /> 
            </div>
            
        </ImageViewContainer>
    )    
}