import { zodResolver } from "@hookform/resolvers/zod";
import { BottomContainer } from "../../../components/Input/styles";
import { LoginContainer } from "./styles";
import {useForm} from "react-hook-form"
import * as zod from "zod"
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {Link,useNavigate} from "react-router-dom"

const schemaForm = zod.object({
    email: zod.string().email(),
    password: zod.string().min(1,"Campo obrigatório")
})
type schemaTypes = zod.infer<typeof schemaForm>
export default function Login() {
   
    const navigate = useNavigate()
    const {register,handleSubmit,formState} = useForm<schemaTypes>({
        resolver: zodResolver(schemaForm)
    })
function onHandleSubmit(data: schemaTypes) {
    console.log(data)
    navigate("/")
}
    return (
        <LoginContainer  className="animate">
            <h1>LEIA</h1>
                 <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <Input errors={formState.errors.email?.message} {...register("email")} placeholder="Digite seu email" type="email"/>
                    <Input errors={formState.errors.password?.message} {...register("password")} placeholder="Digite sua senha" type="password"/>
                    <BottomContainer>
                        <Button>Entrar</Button>
                        <Link to="/cadastrar">Não possui conta? <span>Registe-se</span> </Link>
                    </BottomContainer>
                 </form>
       </LoginContainer>
    ) 
}