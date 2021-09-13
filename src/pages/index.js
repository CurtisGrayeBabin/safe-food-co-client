import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import companyName from '../business/business-logic'
import { 
  bigText,
  taglineText,
  textBg
} from '../styles/text.module.css'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>

      <section>
        <h1 className={bigText}>{companyName}</h1>
        <h2 className={taglineText}>Offering ServSafe exam proctoring!</h2>
      </section>
      
      <StaticImage src='../images/servsafe_logo.png' alt='ServSafe logo image' width={300}/>

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