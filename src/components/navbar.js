import * as React from 'react'
import { Link } from 'gatsby'
import {
  navLinks,
  navLinkItem,
  navLink,
  navbar
} from '../styles/layout.module.css'
import Headroom from 'react-headroom'

const Navbar = () => {
  return (
    <Headroom>
        <nav className={navbar}>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/" className={navLink}>Home</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/about" className={navLink}>About</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/contact" className={navLink}>Contact</Link>
                </li>
            </ul>
        </nav>
    </Headroom>
  )
}

export default Navbar