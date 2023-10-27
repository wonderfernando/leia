import { Link } from "react-router-dom";
import { AuthorBook, BookCardContainer, Gender, TitleBook } from "./styles";
import { IBook } from "../../pages/Inicio";
import { UserCircle } from "phosphor-react";
 
 interface IBookCard {
        book: IBook
    }
export default function BookCard({book}: IBookCard) {

    return (
        <BookCardContainer>
            <Link to={`/livro/${book.id}`}><img src={`../${book.img}`} alt="" /></Link>
            <div>
                 <TitleBook><Link to={`/livro/${book.id}`}>{`${book.title.slice(0,40)}`}</Link></TitleBook>
                 <Gender>Drama, Romance, Comedia</Gender>
                 <AuthorBook>{book.authors}</AuthorBook>
            </div>
           <footer>
                <UserCircle size={22}/>  <Link to="/">fernando wonder</Link> 
            </footer>
        </BookCardContainer>
    )
}