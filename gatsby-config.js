module.exports = {
  siteMetadata: {
    title: 'Good Praxis',
    description: 'Website description',
    author: '@goodpraxiscoop',
    siteUrl: 'https://goodpraxis.coop',
    image: 'https://goodpraxis.coop/images/og.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-T7WCVM3',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/projects`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Good Praxis',
        short_name: 'goodpraxis',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['./src/styles/'],
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-typescript',
    'gatsby-plugin-remove-serviceworker',
  ],
};
