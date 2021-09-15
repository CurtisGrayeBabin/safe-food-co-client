import * as React from 'react'
import Layout from '../components/layout'
import companyName from '../business/business-logic'
import { 
  bigText,
  taglineText,
  textBg
} from '../styles/text.module.css'
import { ServSafeImg } from '../components/images'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const IndexPage = () => {
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
      <section className={textBg}>
          <div>
            <h3>Individuals and Groups</h3>
            <DoneOutlineIcon />
          </div>
          <div>
            <h3>Groups of 5 allowed</h3>
            <DoneOutlineIcon />
          </div>
          <div>
            <h3>Flat rate $100 per person</h3>
            <DoneOutlineIcon />
          </div>
      </section>
      
      {/* allowing a vertical scroll to show the navbar functionality */}
      <div style={{height: '100vh'}}></div>

    </Layout>
  )
}

export default IndexPage