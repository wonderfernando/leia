import SearchInput from "../SearchInput";
import { BannerContainer } from "./styles";

export default function Banner() {
    return (
        <BannerContainer>
            <div>
                <h1>É GRÁTIS!</h1>
                <SearchInput />
            </div>
        </BannerContainer>
    )
}