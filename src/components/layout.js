import * as React from 'react'
import { container } from '../styles/layout.module.css'
import Navbar from './navbar'
import { Helmet } from "react-helmet"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
        <title>{pageTitle}</title>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        
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