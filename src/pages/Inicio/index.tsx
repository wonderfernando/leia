import { Link } from "react-router-dom";
import BookList from "../../components/BookList";
import Banner from "./components/Banner";
import { InicioContainer } from "./styles";
 
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
 
export interface IBook{
        id: Number,
        title:string,
        user_id:Number,
        authors: string,
        img: string,
        path: string,
        gender_id: number
        gender: string
}
export default function Inicio() {
    
  //  const[books, setBooks] = useState<IBook[]>([])
    const {data:books, loading} = useFetch<IBook[]>("./services/books.json",{method:"GET"})
    let booksFilter = []
   for (let index = 0; index < 8; index++) {
        if(books)
        booksFilter.push(books[index])
    };
    
    /*useEffect(()=>{
        (async ()=>{
            try {
                const response = await fetch("./services/books.json")
                const data = await response.json()
                setBooks(data)
            } catch (error) {
                new Error("Deu erro")
            }
           
        
        })()
    },[]) */
    return (
       <InicioContainer>
            {loading ? <Loading/> :<>
            <Banner />
            <section className="container">
                <h2>MAIS RECENTES</h2>
                <BookList books={booksFilter}/>
                <Link to="/livros"><h2>VER MAIS</h2></Link>
            </section>
            </>
            }
       </InicioContainer>
    ) 
}