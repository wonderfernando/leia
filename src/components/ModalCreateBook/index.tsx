import ReactSelect from "react-select";
import useFetch from "../../hooks/useFetch";
import { IGender } from "../../pages/books";
import Input from "../Input";
import Modal from "../Modal";
import {useState} from "react"
import { ModalContent, ModalHeader,ModalBody } from "./styles";
import UploadImage from "../UploadImage";
import UploadPdf from "../UploadPdf";
import FooterModal from "../FooterModal";
interface IModalCreateBook{
    isOpenModal:boolean,
     closeModal: ()=>void
}
export default function ModalCreateBook({isOpenModal, closeModal} :IModalCreateBook ) {
    const { data : genders} = useFetch<IGender[]>("./services/gender.json")
   
   
     const options = genders?.map((gender)=>{
        return { 
            value: String(gender.id), 
            label: gender.name 
        }
    })
    const[genderValue,setGenderValue] = useState<string | undefined>("")
    console.log(genderValue)
    return (
        <Modal isOpenModal={isOpenModal} setOnCloseModal={closeModal}>
        <ModalContent>
           <ModalHeader>
           <h1>Publicar livro</h1>
           </ModalHeader>
           <ModalBody>
            <form action="">
                 <div>
                    <Input placeholder="Titulo"/>
                </div>
                <div>
                    <Input placeholder="Autores"/>
                </div>
                <div>
                    <Input placeholder="Lingua"/>
                </div>
                <div>
                    <ReactSelect isSearchable placeholder="Selecione o Genero do livro" 
                     name="gender"  
                     options={options}
                     onChange={(event)=>setGenderValue(event?.value)}
                     />
                </div>
                <div>
                    <UploadImage/>       
                </div>
                <div>
                    <UploadPdf />
                </div>
                <FooterModal onCloseModal={closeModal}/>
             
            </form>
               
           </ModalBody>
        </ModalContent>
    </Modal>
    )
}