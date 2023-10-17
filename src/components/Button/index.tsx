import { ButtonContainer } from "./styles";

export default function Button({children}:{children: React.ReactNode}) {
    return (
        <ButtonContainer type="submit">{children}</ButtonContainer>
    )
}