import { MagnifyingGlass, TextAlignLeft, X } from "phosphor-react";
import { ButtonAuth, ButtonSearch, CloseButton, HeaderContainer, MenuContainer } from "./styles";
import{useState} from "react"
import {NavLink} from "react-router-dom"
export default function Header() {
    const [openMenuToggle, setOpenMenuToggle] = useState(false)
    function handleClickOpenMenu() {
        setOpenMenuToggle(!openMenuToggle)
        console.log(openMenuToggle)
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
                    <li><div><input type="text" placeholder="procurar" /> <ButtonSearch><MagnifyingGlass color="#fff" size={20}/></ButtonSearch></div></li>
                    <li><NavLink to="/entrar"><ButtonAuth>Entrar</ButtonAuth></NavLink></li>
                    <CloseButton onClick={handleClickOpenMenu}><X size={34} weight="fill" color="#fff"/></CloseButton>
                </ul>
              
            </nav>
            
        </HeaderContainer>
    )
}