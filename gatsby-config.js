module.exports = {
  siteMetadata: {
    title: `react ruby django golang express nodjs js`,
    description: `My name is Kitnipan Dermtoranin I am Full Stack Developer and this is the prove show to I can make website even it is very simple and useless BUT it's very fast!(MAYBE) friendly I hope I'll found this on google ! ps. I code react redux ruby rails python django golang express nodjs javascript and I like to developed`,
    author: `@kitnipan`,
    siteUrl: "https://kitnipan.netlify.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
