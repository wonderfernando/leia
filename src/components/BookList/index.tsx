import { IBook } from "../../pages/Inicio";
import BookCard from "../BookCard";
import { BookListContainer } from "./styles";

interface IBookList{
    books: IBook[]
}

export default function BookList({books}: IBookList) {
    return (
        <BookListContainer>
            {books && books.map(book=>
                <BookCard key={book.id+""} book={book}/>
            )}
 
        </BookListContainer>
    )
}