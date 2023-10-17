import { zodResolver } from "@hookform/resolvers/zod";
import { BottomContainer } from "../../../components/Input/styles";
import {  RegisterContainer } from "./styles";
import {useForm} from "react-hook-form"
import * as zod from "zod"
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {Link} from "react-router-dom"
const schemaForm = zod.object({
    email: zod.string().email(),
    password: zod.string().min(1,"Campo obrigatório"),
    name: zod.string().min(1, "Campo obrigatório"),
})
type schemaTypes = zod.infer<typeof schemaForm>
export default function Register() {
   

    const {register,handleSubmit,formState} = useForm<schemaTypes>({
        resolver: zodResolver(schemaForm)
    })
function onHandleSubmit(data: schemaTypes) {
    console.log(data)
}
    return (
        <RegisterContainer className="animate">
            <h1>LEIA</h1>
                 <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <Input errors={formState.errors.name?.message} {...register("name")} placeholder="Digite seu nome" type="text"/>
                    <Input errors={formState.errors.email?.message} {...register("email")} placeholder="Digite seu email" type="email"/>
                  <Input errors={formState.errors.password?.message} {...register("password")} placeholder="Digite sua senha" type="password"/>
                    <BottomContainer>
                        <p> Ao se registrar, você aceita nossos termos de uso e a nossa política de privacidade.</p>
                        <Button>Cadastrar</Button>
                        <Link to="/entrar">Já possui conta? <span>Entrar</span> </Link>
                    </BottomContainer>
                 </form>
       </RegisterContainer>
    ) 
}