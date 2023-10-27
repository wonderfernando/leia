import { MagnifyingGlass, TextAlignLeft, X } from "phosphor-react";
import { ButtonAuth, ButtonSearch, CloseButton, HeaderContainer, MenuContainer,SearchForm} from "./styles";
import{useState,useEffect} from "react"
import {NavLink, useNavigate} from "react-router-dom"
export default function Header() {
    const [openMenuToggle, setOpenMenuToggle] = useState(false)
    const [search, setSearch] = useState("")
    const navigate =  useNavigate()
    useEffect(()=>{
       setOpenMenuToggle(false)
    },[navigate])
    function handleClickOpenMenu() {
        setOpenMenuToggle(!openMenuToggle)
    }
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
       navigate(`/livros?search=${search}`)
    }
    return (
        <HeaderContainer $openMenuToggle={openMenuToggle}>
            <MenuContainer>
                <button onClick={handleClickOpenMenu}><TextAlignLeft color="#fff" size={44}/></button>
                <h1><a href="/">LEIA</a></h1>
            </MenuContainer>
            <nav>
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/">Publicar</NavLink></li>
                    <li><NavLink to="/">Categorias</NavLink></li>
                    <li><div><SearchForm onSubmit={handleSubmit}><input type="text" onChange={({target})=>setSearch(target.value)} placeholder="procurar" /> <ButtonSearch type="submit"><MagnifyingGlass color="#fff" size={20}/></ButtonSearch></SearchForm></div></li>
                    <li><NavLink to="/entrar"><ButtonAuth>Entrar</ButtonAuth></NavLink></li>
                    <CloseButton onClick={handleClickOpenMenu}><X size={34} weight="fill" color="#fff"/></CloseButton>
                </ul>
              
            </nav>
            
        </HeaderContainer>
    )
}