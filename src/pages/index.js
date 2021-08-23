import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1>Who we are:</h1>
      <ul>
        <li>Certified: Certified Instructor and Proctor for ServSafe</li>
        <li>Professional: Certified Executive Chef (ACF certified)</li>
        <li>Experienced: Instructed ServSafe courses at the college level for 6 years</li>
      </ul>

      <h1>What we offer:</h1>
      <ul>
        <li>ServSafe exam proctoring for up to 5 people at a time for $100 per person</li>
      </ul>
    </Layout>
  )
}

export default IndexPage