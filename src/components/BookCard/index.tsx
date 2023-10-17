import { Link } from "react-router-dom";
import { BookCardContainer } from "./styles";

export default function BookCard() {
    return (
        <BookCardContainer>
            <Link to="/"><span>Pai Rico Pai pobre</span></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente error.</p>
            <Link to="/"><span>ler</span></Link>
        </BookCardContainer>
    )
}