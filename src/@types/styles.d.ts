import "styled-components"

import {MyThemeDefault} from "../styles/MyThemeDefault"


type MyThemeDefaultType = typeof MyThemeDefault

declare module "styled-components" {
    export interface DefaultTheme extends MyThemeDefaultType {}
}
