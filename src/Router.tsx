import {Route,Routes} from "react-router-dom"
import Layout from "./components/Layout"
import Inicio from "./pages/Inicio"
import Books from "./pages/books"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Book from "./pages/book"
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/livros" element={<Books/>}/>
                <Route path="/livro/:id" element={<Book/>}/>
            </Route>
            <Route path="/entrar" element={<Login/>}/>
            <Route path="/cadastrar" element={<Register/>}/>
        </Routes>
    )
}