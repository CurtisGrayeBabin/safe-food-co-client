import * as React from 'react'
import Layout from '../components/layout'
import companyName from '../business/business-logic'
import { 
  bigText,
  taglineText
} from '../styles/text.module.css'
import { ServSafeImg } from '../components/images'
import Bubble from '../components/bubble'

const IndexPage = () => {

  const greenLine1 = 'Individuals and Groups';
  const greenLine2 = 'Groups of 5 allowed';
  const greenLine3 = 'Flat rate $100 per person';

  const bubbleProps=[greenLine1,greenLine2,greenLine3];

  return (
    <Layout pageTitle='Home'>

      <section>
        <h1 className={bigText}>{companyName}</h1>
        <h2 className={taglineText}>Offering ServSafe exam proctoring!</h2>
      </section>
      
      {/* Images */}
      <section>
        <ServSafeImg />
      </section>

      {/* Green text section with checkmarks */}
      <Bubble texts={bubbleProps} />
      
      {/* allowing a vertical scroll to show the navbar functionality */}
      <div style={{height: '100vh'}}></div>

    </Layout>
  )
}

export default IndexPage