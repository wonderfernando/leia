import { Link } from "react-router-dom";
import BookList from "../../components/BookList";
import Banner from "./components/Banner";
import { InicioContainer } from "./styles";
import { useEffect,useState } from "react";
 
export interface IBook{
        id: Number,
        title:string,
        user_id:Number,
        authors: string,
        img: string,
        path: string
}
export default function Inicio() {
    
    const[books, setBooks] = useState<IBook[]>([])

    useEffect(()=>{
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
       <InicioContainer>
            <Banner/>
            <section className="container">
                <h2>MAIS RECENTES</h2>
                <BookList books={books}/>
                <Link to="/livros"><h2>VER MAIS</h2></Link>
            </section>
       </InicioContainer>
    ) 
}