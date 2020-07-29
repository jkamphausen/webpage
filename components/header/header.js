import styled from 'styled-components'

export const Header = styled.header`
  height: 100%;
  width: 100%;
  background: #1D1D1D;
  color: #E3E3E3;

  display: grid;
  grid-template-columns: 1rem 1fr 1rem;

  h1 {

    grid-row:1;
    grid-column:2;

    span {
      display: block;
      width: 100%;
    }

  }
`