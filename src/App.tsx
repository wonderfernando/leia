 import {GlobalStyles} from "./styles/GlobalSytles"
 import {ThemeProvider} from "styled-components"
 import {MyThemeDefault} from "./styles/MyThemeDefault"
 import {BrowserRouter} from "react-router-dom"
import Router from "./Router"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
function App() {
 
  return (
    <ThemeProvider theme={MyThemeDefault}>
      <BrowserRouter>
      <ToastContainer/>
          <Router/>
        <GlobalStyles/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App