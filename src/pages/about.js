import * as React from 'react'
import Layout from '../components/layout'
import { ServSafeImg, ACFImg } from '../components/images'
import {
  bigText
} from '../styles/text.module.css'

const AboutPage = () => {
  return (
    <Layout pageTitle='About'>
      <h1 className={bigText}>About us</h1>
      
      <h2>Certified: Certified Instructor and Proctor for ServSafe</h2>
      
      <ServSafeImg />

      <h2>Professional: Certified Executive Chef (ACF certified)</h2>

      <ACFImg />

      <h2>Experienced: Instructed ServSafe courses at the college level for 6 years</h2>
    
    </Layout>
  )
}

export default AboutPage