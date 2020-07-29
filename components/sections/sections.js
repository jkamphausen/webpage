import styled from 'styled-components'

/*
BaseSection
TITLE
TEXT
*/
export const BaseSection = styled.section`

  padding-bottom: 5em;

  background: #1D1D1D;
  color: #E3E3E3;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1rem 1fr 1rem;
  grid-template-rows: 40px min-content min-content auto;

  .section-title {
      grid-row:2;
      grid-column:2;
      align-self:center;
      padding-bottom: 2em;
  }

  .section-image {
      grid-row: 3;
      grid-column: 1 / -1!important;
      width: 100%;
  }

  .section-text {
      grid-row:4;
      grid-column:2;
      max-width: 90%;
  }
`

/*
GridSection
TITLE
IMAGE
TEXT
*/

export const GridSection = styled(BaseSection)`
  background: #1D1D1D;
  color: #E3E3E3;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1rem 1fr 1rem;
  grid-template-rows: 30px min-content auto;

  .square-grid {

    grid-row:2;
    grid-column:2;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;

    .tile {
      width: 100%;
      :after {
        content: ""; 
        display: block;
        padding-bottom: 100%;
      }

      /* background: lemonchiffon; */
      position: relative;

      border: 1px solid #E3E3E3;
      
      .tile-content {
        position: absolute;
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: 1;
        grid-template-rows: 1;

        img {
          grid-column: 1 / -1;
          grid-row: 1 / -1;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.2;
          z-index: 0;
          position: relative;
        }

        h3 {
          grid-column: 1 / -1;
          grid-row: 1 / -1;
          justify-self: center;
          align-self: center;
          color: #E3E3E3;
          z-index: 5;
        }
      }

      /* img, h3 {
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        align-self: center;
        justify-self: center;
      }

      img {
        width: 100%;
      } */
      
    }

    .current-tile {
        border: 1px dotted #E3E3E3;
    }

  }

  .section-title {
      grid-row:1;
      grid-column:2;
      align-self:center;
  }

  .section-image {
      grid-row: 2;
      grid-column: 1 / -1!important;
      width: 100%;
  }

  .section-text {
      grid-row:3;
      grid-column:2;
  }
`


/*

html:not([data-scroll='0']) {

    body {
      padding-top: 3em;
    }

    header {
        position: fixed;
        top: 0;
        background-color: #fff;
        box-shadow: 0 0 .5em rgba(0, 0, 0, .5);
    }

}

*/


export const HeaderSection = styled(BaseSection)`

  padding-bottom: 0;
 
  grid-template-rows: 1rem          /* 1 SPACER */
                      min-content   /* 2 h1 */
                      auto          /* 3 free */
                      6em   /* 4 social */
                      3em;  /* 5 arrow */
  

  header {
    grid-row:2;
    grid-column:1 / -1;
    display: grid;
    grid-template-columns: 1rem 1fr 1fr 1rem;
    grid-template-rows: 1;
    
    .toggle {
      grid-column: 3;
    }

    h1 {
    grid-column:2;
      span {
        display: block;
        width: 100%;
      }
      z-index: 1;
    }
    
  }

  .social-box {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(4, calc(2em * 1.5));
    grid-row: 4;
    grid-column: 2;
    align-self: center;
    justify-self: center;

    * {
      padding: .1em;
      margin: 0;
      font-size: calc(1em * 1.5 * 1.5);
      align-self: center;
      justify-self: center;
      z-index: 10000;

      :hover {
        background: #E3E3E3;
        color: #1D1D1D;
        border-radius: 0.1em;
      }
    }
  }

  .triangle-box {
      grid-row: 5;
      grid-column: 2;
      width: 100%;
      height: 1.5em;
      z-index: 5;

      display: grid;
      align-self: center;
      padding: 0;
      margin: 0;
      svg {
      padding: 0;
      margin: 0;
        justify-self: center;
        height: 100%;
        fill: #E3E3E3;
        transform: rotate(180deg);
      }
  }
  
  .intro-image {
    grid-row: 1 / -1;
    grid-column: 1 / -1;
    width: 100%;
    height: 100vh;
    position: relative;
    display: subgrid;
    overflow: hidden;
    
    z-index: 0;
    img {
      grid-row: 1 / -1;
      grid-column: 1 / -1;
      width: auto; 
      height: 100%;
      object-fit: cover;
      opacity: .5;
    }
  
    :after {
      content: ""; 
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 25%;
      background-image: linear-gradient(0deg, #1D1D1D 10%, transparent 100%);
      opacity: 1;
    }

  } `