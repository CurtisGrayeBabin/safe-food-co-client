import * as React from 'react'
import { Link } from 'gatsby'
import {
    rightInfo,
    navLinks,
    navLogo,
    navbar,
} from '../styles/navbar.module.css'
import Headroom from 'react-headroom'
import companyName from '../business/business-logic'
import { servingMessage } from '../business/business-logic'
import PinDropIcon from '@material-ui/icons/PinDrop'

const Navbar = () => {

    return (
        <Headroom>
            <nav className={navbar}>

                <div className={navLogo}>
                    <span>{companyName}</span>
                </div>

                <div className={navLinks}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className={rightInfo}>
                    <span>{servingMessage}</span>&nbsp;
                    <PinDropIcon />
                </div>

            </nav>
        </Headroom>
    )
}

export default Navbar