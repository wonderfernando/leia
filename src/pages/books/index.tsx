import BookList from "../../components/BookList";
import { IBook } from "../Inicio";
import SearchInput from "../Inicio/components/SearchInput";
import { Aside, BookContainer, Content, TopContainer } from "./styles";
import {useState,useEffect} from "react";


 interface IGender{
        id: number,
        name: string
}

export default function Books() {
    const[books, setBooks] = useState<IBook[]>([])

    const[genders,setGender] = useState<IGender[]>([])
    useEffect(()=>{
        (async()=>{
            const response = await fetch("./services/gender.json")
            const data = await response.json()
            setGender(data)
            console.log(data)
        })();

        (async ()=>{
            try {
                const response = await fetch("./services/books.json")
                const data = await response.json()
                setBooks(data)
            } catch (error) {
                new Error("Deu erro")
            }
           
        
        })()
    },[])
   
    return (
      <BookContainer>
            <TopContainer>
                <SearchInput />
            </TopContainer>
            <Content>
                <Aside>
                    <h1>Categorias</h1>
                    <ul>
                        {genders && genders.map(gender=>(
                            <li key={gender.id+""}><input type="checkbox" id={gender.id+""}/><label htmlFor={gender.id+""}>{gender.name}</label></li>    
                        )) }
                    </ul>
                </Aside>
                <div>
                    <BookList $isOnGender={true} books={books}/>
                </div>
            </Content>
      </BookContainer>
    ) 
}