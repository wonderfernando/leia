import { Link } from "react-router-dom";
import BookList from "../../components/BookList";
import Banner from "./components/Banner";
import { InicioContainer } from "./styles";

export default function Inicio() {
    return (
       <InicioContainer>
            <Banner/>
            <section className="container">
                <h2>MAIS RECENTES</h2>
                <BookList />
                <Link to=""><h2>VER MAIS</h2></Link>
            </section>
       </InicioContainer>
    ) 
}