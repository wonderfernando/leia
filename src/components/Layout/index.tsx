import Footer from "../Footer";
import Header from "../Header";
import { LayoutContainer } from "./styles";
import {Outlet} from "react-router-dom"
export default function Layout() {
    return(
        <LayoutContainer>
            <Header/>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </LayoutContainer>
    )
}