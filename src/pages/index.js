import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>

  
      <h1>Food-Safe Solutions</h1>
      <h2>ServSafe exam proctoring!</h2>
      <StaticImage src='../images/servsafe_logo.png' alt='ServSafe logo image' width={300}/>

      <h2>Proctoring for up to 5 people at a time</h2>
      <h2>for $100 per person</h2>
      <StaticImage src='../images/afc_badge.png' alt='ACF badge image' width={200}/>
  
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>

    </Layout>
  )
}

export default IndexPage