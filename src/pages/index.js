import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import companyName from '../business/business-logic'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>

  
      <h1>{companyName}</h1>
      <h2>ServSafe exam proctoring!</h2>
      <StaticImage src='../images/servsafe_logo.png' alt='ServSafe logo image' width={300}/>

      <h2>Proctoring for up to 5 people at a time</h2>
      <h2>for $100 per person</h2>
      <StaticImage src='../images/afc_badge.png' alt='ACF badge image' width={200}/>

      {/* allowing a vertical scroll to show the navbar functionality */}
      <div style={{height: '100vh'}}></div>

    </Layout>
  )
}

export default IndexPage