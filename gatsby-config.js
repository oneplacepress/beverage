/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "bJg9jodQGFAyriFTaT3G4v",
        token: "wqWb8cGRrwLQMI3RcrIyTA6l7Heh4tgEbVwM0wrSAg7qHB64MWR6490uQOVejT41DD3YBPHPwfqi89BflBHUw",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
