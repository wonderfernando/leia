import BookCard from "../BookCard";
import { BookListContainer } from "./styles";

export default function BookList() {
    return (
        <BookListContainer>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/> 
            <BookCard/> 
            <BookCard/>   
            <BookCard/>
            <BookCard/>
        </BookListContainer>
    )
}