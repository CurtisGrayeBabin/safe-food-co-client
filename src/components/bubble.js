import * as React from 'react'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { 
    textBg
  } from '../styles/text.module.css'

const Bubble = (props) => {
    return (
      <section className={textBg}>
          {
              props.texts.map(text => (
                <div>
                    <h3>{text}</h3>
                    <DoneOutlineIcon />
                </div>
              ))
          }
      </section>
    )
}

export default Bubble;