import Head from 'next/head'
import Link from 'next/link'

import styled from 'styled-components'

import { Container } from '../components/container/container'
import { BaseSection, GridSection, HeaderSection } from '../components/sections/sections'
import { Footer, FooterElement } from '../components/footer/footer'
import { Navigator, NavigatorVerticalText } from '../components/navigator/navigator'
import { Signet } from '../components/signet/signet'
import { Header } from '../components/header/header'

import { PopoverContainer, Popover, PopoverToggle } from '../components/popover/popover'

import { FaGithub, FaXing, FaXingSquare, FaLinkedinIn, FaLinkedin, FaTelegramPlane, FaTelegram, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Julian Kamphausen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PopoverContainer>
        <Popover className="off">
          <div className="header"><h3>Menu</h3></div>
          <div className="body">
            <ul>
              <li><Link href="/"><a>Intro</a></Link></li>
              <li><Link href="/"><a>Projects</a></Link></li>
              <li><Link href="/"><a>Contact</a></Link></li>
              <li><Link href="/"><a>Imprint</a></Link></li>
              <li><Link href="/"><a>DSGVO</a></Link></li>
              <li><Link href="/"><a>✕</a></Link></li>
            </ul>
          </div>
          <div className="footer"></div>
        </Popover>
      </PopoverContainer>

      <Container>

        <HeaderSection>
          <div className="intro-image">
            {/* <img src="/img/sample/IMG_0152.jpg" alt="" /> */}
            <img src="/img/sample/j1.jpg" alt="" />
          </div>

          <header>
            <h1><span>Julian</span> Kamphausen</h1>
            <PopoverToggle className="toggle">
              <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
              <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
              </label>
            </PopoverToggle>
          </header>

          <div className="social-box">
            <Link href="/">
              <FaXingSquare />
            </Link>
            <Link href="/">
              <FaLinkedin />
            </Link>
            <Link href="/">
              <FaEnvelope />
            </Link>
            <Link href="/">
              <FaTelegramPlane />
            </Link>
          </div>

          <div className="triangle-box">
            <svg id="triangle" viewBox="0 0 100 100">
              <polygon points="50 15, 100 100, 0 100" />
            </svg>
          </div>

        </HeaderSection>

        <BaseSection>
          <div className="section-title"><h2>abc</h2></div>
          <div className="section-text">
            <p>Hi - Ich bin Julian. Lorem ipsum dolor sit amet, consectetur adipisici elit.</p>
            <p>Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </BaseSection>

        <BaseSection>
          <div className="section-title"><h2>About</h2></div>
          <img className="section-image" src="/img/sample/A.jpg" alt="" />
          <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </BaseSection>

        <GridSection>
          <div className="section-title"><h2>Projects</h2></div>
          <div className="square-grid">
            <div className="tile current-tile">
              <div className="tile-content">
                <img src="" alt="" />
                <h3>current work</h3>
              </div>
            </div>
            <div className="tile">
              <div className="tile-content">
                <img src="/img/sample/D.jpg" alt="a" />
                <h3>Web App</h3>
              </div>
            </div>
            <div className="tile">
              <div className="tile-content">
                <img src="/img/sample/E.jpg" alt="a" />
                <h3>Print</h3>
              </div>
            </div>
            <div className="tile">
              <div className="tile-content">
                <img src="/img/sample/A.jpg" alt="a" />
                <h3>Webpage</h3>
              </div>
            </div>
            <div className="tile">
              <div className="tile-content">
                <img src="/img/sample/B.jpg" alt="b" />
                <h3>Webpage</h3>
              </div>
            </div>
            <div className="tile">
              <div className="tile-content">
                <img src="/img/sample/C.jpg" alt="c" />
                <h3>PR</h3>
              </div>
            </div>
          </div>
        </GridSection>

        <BaseSection>
          <div className="section-title"><h2>Contact</h2></div>
          <div className="section-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </BaseSection>

      </Container>




    </div >
  )
}
