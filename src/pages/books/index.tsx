import BookList from "../../components/BookList";
import { IBook } from "../Inicio";
import SearchInput from "../Inicio/components/SearchInput";
import { Aside, BookContainer, Content, TopContainer } from "./styles";
import {useState,useEffect} from "react";
import {useSearchParams} from "react-router-dom"

 export interface IGender{
        id: number,
        name: string
}

export default function Books() {
    const[books, setBooks] = useState<IBook[]>([])
    const[searchParams] =useSearchParams()
    
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
                const data = (await response.json()) as IBook[]
                const search = searchParams.get("search")
                console.log(data)
                if(search){
                    const dt = data.filter(dat=>dat.title.toLowerCase().includes(search.toLowerCase()))
                    setBooks(dt)
                }
                else
                setBooks(data)
                console.log(data)
            } catch (error) {
                new Error("Deu erro")
            }
           
        
        })()
    },[searchParams])
    
   
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
                            <li key={gender.id+""}>{gender.name}</li>    
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