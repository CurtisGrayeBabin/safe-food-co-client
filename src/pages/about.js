import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <Layout pageTitle='About'>
      <h1>About us</h1>
      
      <h2>Certified: Certified Instructor and Proctor for ServSafe</h2>
      <StaticImage src='../images/servsafe_logo.png' alt='ServSafe logo image' width={300}/>
      <h2>Professional: Certified Executive Chef (ACF certified)</h2>
      <StaticImage src='../images/afc_badge.png' alt='ACF badge image' width={200}/>
      <h2>Experienced: Instructed ServSafe courses at the college level for 6 years</h2>
    
    </Layout>
  )
}

export default AboutPage