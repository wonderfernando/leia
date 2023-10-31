import { ReactNode } from "react";
import { ModalContainer,ModalWrapper,ButtonCloseModal } from "./styles";
import { X } from "phosphor-react";

export default function Modal({children, setOnCloseModal,isOpenModal}: {children: ReactNode,setOnCloseModal:()=>void,isOpenModal: boolean}) {
    function handleClickModalOut(params: React.MouseEvent) {
        if (params.currentTarget ===params.target) 
            setOnCloseModal()
    }
    return <ModalContainer onClick={handleClickModalOut} $isOpenModal={isOpenModal}>
            
        <ModalWrapper  className="animateModalFade">
            <ButtonCloseModal onClick={setOnCloseModal}><X weight="fill" size={24} color="#333"/></ButtonCloseModal>
            {children}
        </ModalWrapper>
    </ModalContainer>
}