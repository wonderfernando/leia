
import { FooterModalContainer } from './styles'

export default function FooterModal({onCloseModal}: {onCloseModal:()=>void}) {
  return (
    <FooterModalContainer>
        <button onClick={onCloseModal} type="button">Cancelar</button>
        <button type="submit">Confirmar</button>
    </FooterModalContainer>
  )
}
