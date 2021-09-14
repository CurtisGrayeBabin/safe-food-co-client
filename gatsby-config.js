require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Safe Food Co Client",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["COMPANY","SERVING_MSG","PHONE","EMAIL","LOCATION"]
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss'
  ],
  flags: {
    DEV_SSR: false
   }
};
