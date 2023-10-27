import { MagnifyingGlass } from "phosphor-react";
import { SearchinputContainer,Form } from "./styles";
import { FormEvent, useState } from "react";
import {useNavigate} from "react-router-dom"
export default function SearchInput() {
      const navigate = useNavigate()
    const[search,setSearch] = useState("")
    function handleSubmit(params:FormEvent) {
        params.preventDefault()
        const url = `/livros?search=${search}` 
        navigate(url)
    }
    return (
        <Form onSubmit={handleSubmit}>
        <SearchinputContainer>
            
                <span><MagnifyingGlass size={24}/></span>
                <input value={search} onChange={({target})=>setSearch(target.value)} type="text" placeholder="Procurar livros"/>
           
        </SearchinputContainer>
        </Form>
    )
}