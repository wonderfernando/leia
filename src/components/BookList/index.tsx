import { IBook } from "../../pages/Inicio";
import BookCard from "../BookCard";
import { BookListContainer } from "./styles";

interface IBookList{
    books: IBook[] | undefined,
    $isOnGender?:boolean 
}

export default function BookList({books,$isOnGender}: IBookList) {
    console.log($isOnGender)
    return (
        <BookListContainer $isOnGender={$isOnGender}>
            {books && books.map(book=>
                <BookCard key={book.id+""} book={book}/>
            )}
 
        </BookListContainer>
    )
}