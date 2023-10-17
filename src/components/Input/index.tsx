import { InputHTMLAttributes, forwardRef } from "react"
import {InputContainer, InputStyled} from "./styles"
import Error from "../Error"

type InputHtmlElementType = InputHTMLAttributes<HTMLInputElement> & {
    errors?: string
}
 
 const Input = forwardRef<HTMLInputElement,InputHtmlElementType>(({errors,...props},ref)=>{
    return(
        <InputContainer>
            <InputStyled $hasError={errors} ref={ref} {...props}/>
             {errors && <Error>{errors}</Error>}
        </InputContainer>
    )
 })

 export default Input