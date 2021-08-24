import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  navbar
} from '../styles/layout.module.css'
import Headroom from 'react-headroom'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
        <title>{pageTitle}</title>
        <Headroom>
            <nav className={navbar}>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                        Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                        About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/contact" className={navLinkText}>
                        Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </Headroom>
        <div className={container}>
            <main>
                {/*<h1 className={heading}>{pageTitle}</h1>*/}
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout