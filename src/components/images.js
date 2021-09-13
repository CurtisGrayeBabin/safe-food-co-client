import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const ServSafeImg = () => {
    return (
        <StaticImage src='../images/servsafe_logo.png' alt='ServSafe logo image' width={300}/>
    )
}

const ACFImg = () => {
    return (
        <StaticImage src='../images/afc_badge.png' alt='ACF badge image' width={200}/>
    )
}

export { ServSafeImg, ACFImg }
