import styled from "styled-components"

const ErrorContainer = styled.span`
    color: ${({theme})=>theme.colors["base-error"]};
    font-size: ${({theme})=>theme.textSizes["text-s"]};
`

export default function Error({children}: {children: React.ReactNode}) {
    return (
        <ErrorContainer>{children}</ErrorContainer>
    )
}