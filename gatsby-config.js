module.exports = {
  siteMetadata: {
    title: `Pixwel Sandbox`,
    description: `Sandbox for prototyping pages and components on Pixwel Platform 3.x`,
    author: `@drichar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pxwl-sandbox`,
        short_name: `pxwl-sandbox`,
        start_url: `/`,
        background_color: `#bd10e0`,
        theme_color: `#bd10e0`,
        display: `browser`,
        icon: `src/images/pixwel.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
