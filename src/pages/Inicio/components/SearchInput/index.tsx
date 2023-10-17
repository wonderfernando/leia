import { MagnifyingGlass } from "phosphor-react";
import { SearchinputContainer } from "./styles";

export default function SearchInput() {
    return (
        <SearchinputContainer>
            <span><MagnifyingGlass size={24}/></span>
            <input type="text" placeholder="Procurar livros"/>
        </SearchinputContainer>
    )
}