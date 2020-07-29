import styled from 'styled-components'

export const PopoverContainer = styled.div`
    color: #1D1D1D;
    /* background: #1D1D1D; */

    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 1rem auto 1rem;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    z-index: 999;

    .off {
        transform: translateY(100%);
    }

    .on {
        transform: translateY(0%);
    }
`

export const PopoverToggle = styled.div`
    display: block;
    input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
}

input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
}
.sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    height: 100%;
    width: 100%;
    top: 22px;
    left: 15px;
    height: 30px;
    width: 30px;
}
.spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #E3E3E3;
}
.horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
}
.diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
}
.diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
}

    input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
        transition: all 0.3s;
        box-sizing: border-box;
        opacity: 0;
    }
    input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
        transition: all 0.3s;
        box-sizing: border-box;
        transform: rotate(135deg);
        margin-top: 8px;
    }
    input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
        transition: all 0.3s;
        box-sizing: border-box;
        transform: rotate(-135deg);
        margin-top: -9px;
    }
`

export const Popover = styled.div`
    background: #E3E3E3;
    grid-row: 3 / 5;
    grid-column: 2 / 3;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    padding: 1em;
    
    z-index: 1000;

    -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 7px;
    -moz-box-shadow: rgba(0,0,0,0.3) 0 1px 7px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 7px;

    display: grid;
    grid-template-rows: calc(1em * 1.5 * 1.5) auto calc(1em * 1.5 * 1.5);
    .header {
        align-self: center;
    }
    .body {
        ul {
            padding: 0;
            margin: 0;
            list-style: none;
            height: 100%;
            display: grid;
            align-items: center;

            li a {
                text-align: center;
                line-height: 1.5em;
                display: block;
                width: calc(100% - .5em);
                padding: .25em;
                margin: .25em;
                border: #1D1D1D solid 2px;
                color: #1D1D1D;
                text-decoration: none;
            }
        }
    }
    .footer {
        align-self: center;
    }
`