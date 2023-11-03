import ReactSelect from "react-select";
import useFetch from "../../hooks/useFetch";
import { IGender } from "../../pages/books";
import Input from "../Input";
import Modal from "../Modal";
import { ModalContent, ModalHeader,ModalBody } from "./styles";
import UploadImage from "../UploadImage";
import UploadPdf from "../UploadPdf";
import FooterModal from "../FooterModal";
import * as zod from "zod"
import {useForm,FormProvider, Controller} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import Error from "../Error";
interface IModalCreateBook{
    isOpenModal:boolean,
     closeModal: ()=>void
}

 
const CreateBookSchem = zod.object({
    title: zod.string().min(1,"Titulo do livro Obrigátorio"),
    author: zod.string(),
    language: zod.string().min(1,{message:"Informe o idioma do livro"}),
    gender: zod.string().min(1,{message:"Informe o genero do livro"}),
    pdf: zod.instanceof(File,{message: "Carregue o livro em formato pdf"}),
    img: zod.instanceof(File,{message: "Envie a capa do livro"})
})
export interface ILanguage{
    language: string
}
export type typeForm = zod.infer<typeof CreateBookSchem>
export default function ModalCreateBook({isOpenModal, closeModal} :IModalCreateBook ) {
    const { data : genders} = useFetch<IGender[]>("./services/gender.json")
    const { data : languages} = useFetch<ILanguage[]>("./services/languages.json")
    
     const option  = genders?.map((gender)=>(
          { 
            value: String(gender.id), 
            label: gender.name
        }
    ))


    const optionLanguages = languages?.map(language => ( {
        value: language.language,
        label: language.language 
    }))
   
    const bookForm = useForm<typeForm>({
        resolver: zodResolver(CreateBookSchem)
    })
    const {register,handleSubmit,formState, control} = bookForm
    function onSubmit(data: typeForm) {
        console.log(data)
    }
    console.log(formState.errors)
    
    return (
        <Modal isOpenModal={isOpenModal} setOnCloseModal={closeModal}>
        <ModalContent>
           <ModalHeader>
           <h1>Publicar livro</h1>
           </ModalHeader>
           <ModalBody>
           <FormProvider  {...bookForm}>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <div>
                        <Input errors={formState.errors.title?.message} placeholder="Titulo" {...register("title")}/>
                    </div>
                    <div>
                        <Input errors={formState.errors.author?.message} placeholder="Autores" {...register("author")}/>
                    </div>
                    <div>
                    <ReactSelect  
                           options={optionLanguages}
                           ref={register("language").ref}
                           name={register("language").name}
                            onChange={(e) => register("language").onChange({target: {value: e?.value ,name: register("language").name} })}
                        />
                        {formState.errors.language?.message && <Error>{formState.errors.language?.message}</Error>}
                    </div>
                    <div>
                        <Controller
                        control={control}
                        name="gender"
                          render={ ({field}) => <ReactSelect options={option}
                           onChange={(e)=>field.onChange(e?.value)}
                            
                           ref={field.ref}
                       
                           />
                        }
                        />
                        {formState.errors.gender?.message && <Error>{formState.errors.gender?.message}</Error>}
                    </div>
                    <div>
                        <UploadImage/>       
                    </div>
                    <div>
                        <UploadPdf />
                    </div>
                    <FooterModal onCloseModal={closeModal}/>
                
                </form>
            </FormProvider>
           </ModalBody>
        </ModalContent>
    </Modal>
    )
}