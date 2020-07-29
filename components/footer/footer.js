import styled from 'styled-components'

export const Footer = styled.footer`
    background: #000000;
    color: #E3E3E3;
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(5, 20%);
  @media only screen and (max-width:600px) {
    grid-template-columns: 1fr;
    grid-template-columns: 1fr;
  } 
`

export const FooterElement = styled.div`
    grid-column: ${props => props.start} / ${props => props.end}
`

FooterElement.defaultProps = {
    start: 'auto',
    end: 'auto'
}