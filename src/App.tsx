 import {GlobalStyles} from "./styles/GlobalSytles"
 import {ThemeProvider} from "styled-components"
 import {MyThemeDefault} from "./styles/MyThemeDefault"
 import {BrowserRouter} from "react-router-dom"
import Router from "./Router"
function App() {
 
  return (
    <ThemeProvider theme={MyThemeDefault}>
      <BrowserRouter>
          <Router/>
        <GlobalStyles/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App