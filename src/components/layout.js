import * as React from 'react'
import { container } from '../styles/layout.module.css'
import Navbar from './navbar'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
        <title>{pageTitle}</title>
        <Navbar></Navbar>
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