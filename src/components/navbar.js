import * as React from 'react'
import { Link } from 'gatsby'
import {
    rightInfo,
    navText,
    navLinks,
    navLogo,
    navbar,
} from '../styles/navbar.module.css'
import Headroom from 'react-headroom'
import companyName from '../business/business-logic'
import { servingMessage } from '../business/business-logic'

const Navbar = () => {

    return (
        <Headroom>
            <nav className={navbar}>

                <div className={navLogo}>
                    <span className={navText}>{companyName}</span>
                </div>

                <div className={navLinks}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className={rightInfo}>
                    <span className={navText}>{servingMessage}</span>
                </div>

            </nav>
        </Headroom>
    )
}

export default Navbar