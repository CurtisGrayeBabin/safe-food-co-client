import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle='About'>
      <h1>About us:</h1>
      <ul>
        <li>Certified: Certified Instructor and Proctor for ServSafe</li>
        <li>Professional: Certified Executive Chef (ACF certified)</li>
        <li>Experienced: Instructed ServSafe courses at the college level for 6 years</li>
      </ul>
    </Layout>
  )
}

export default AboutPage