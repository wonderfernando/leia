
import { BookContainer, Content, RelatedContent} from "./styles";
import {useEffect, useState} from "react";
import { Star } from "phosphor-react";
import ButtonOragen from "../../components/ButtonOrage";
import ImageView from "./components/ImageView";
import { IBook } from "../Inicio";
import {useParams} from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import BookList from "../../components/BookList";
import Loading from "../../components/Loading";
import {toast} from "react-toastify"
 
export default function Book() {
    const[isOpen,setIsOpenModal] = useState(false)
    function handleImgClick() {
        toogleModal()
    }
    function toogleModal() {
        setIsOpenModal(!isOpen)
    }
    const {id} = useParams()
    const {data: livros, loading, error} = useFetch<IBook[]>("../services/books.json", {method:"GET"})
    console.log(loading)
    let book = null;
    if(livros)
         book = livros.find((livro) => livro.id.toString() === id)
   
         useEffect(()=>{
            window.scrollTo({top:0, behavior: "smooth"})
            if (error) {
                toast.error("Algum erro aconteceu")
            }
         },[id])
 
   return (
      <BookContainer className="container">
            {loading && <Loading/>}
            <Content className="animate">
                <img alt="" src={`../${book?.img}`} onClick={handleImgClick}/>
                <div>
                    <h1>{book && book.title}</h1>
                    <span>Genero: Romance, Drama</span>
                    <span>Autores:{book?.authors}</span>
                    <span><Star weight="fill" color="#FF8A00" size={22}/> 100</span>
                    <p>
                        <a href={book?.path}><ButtonOragen>Baixar agora</ButtonOragen></a>
                    </p>
                </div>
            </Content>
            <RelatedContent className="animate">
                <h2>Resultados relacionados</h2>
                <BookList books={livros}/>
            </RelatedContent>
            <ImageView src={book?.img} isOpen={isOpen} setIsOpenModal={toogleModal}/>
      </BookContainer>
    )
}