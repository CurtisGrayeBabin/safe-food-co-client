import * as React from 'react'
import Layout from '../components/layout'

import {
  bigText,
  standardText
} from '../styles/text.module.css'

import {
  phone,
  email,
  sameLine
} from '../styles/contact.module.css'

import { phoneNumber, emailAddress, location } from '../business/business-logic'

import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';

const ContactPage = () => {

  const emailHref=`mailto: ${emailAddress}` 
  const phoneHref=`tel: ${phoneNumber}` 

  const iconStyle = { fontSize: 40, 'paddingBottom':'10px' }

  return (
    <Layout pageTitle='Contact'>

      <section>
        <div className={sameLine}>
          <h1 className={bigText}>Call us</h1>
          <PhoneInTalkOutlinedIcon style={iconStyle}/>
        </div>
        <a href={phoneHref} className={phone}>{phoneNumber}</a>
      </section>

      <section>
        <div className={sameLine}>
          <h1 className={bigText}>Email us</h1>
          <EmailOutlinedIcon style={iconStyle}/>
        </div>
        <a href={emailHref} className={email}>{emailAddress}</a>
      </section>
    
      <section>
        <div className={sameLine}>
          <h1 className={bigText}>Location</h1>
          <BusinessOutlinedIcon style={iconStyle}/>
        </div>
        <p className={standardText}>{location}</p>
      </section>

    </Layout>
  )
}

export default ContactPage