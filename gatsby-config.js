module.exports = {
  siteMetadata: {
    siteUrl: 'https://goodpraxis.coop',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-T7WCVM3',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#dddddd',
        display: 'standalone',
        name: 'Good Praxis',
        short_name: 'Good Praxis',
        start_url: '/',
        theme_color: '#feee95',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://goodpraxis.coop',
        sitemap: 'https://goodpraxis.coop/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['./node_modules/modularscale-sass/stylesheets/'],
      },
    },
    'gatsby-plugin-offline',
  ],
};
