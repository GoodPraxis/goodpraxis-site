module.exports = {
  siteMetadata: {
    title: 'Good Praxis',
    description: 'We’re an award-winning digital innovation co-operative. We collaboratively develop tech products for organisations whose aim is to rebalance the inequalities of society.',
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
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://120b47edc1d54bc48cb41fa89573f403@o472257.ingest.sentry.io/5505617',
      },
    },
    {
      resolve: 'gatsby-plugin-recaptcha',
      options: {
        async: false,
        defer: false,
        args: '?onload=onloadCallback&render=explicit',
      },
    },
  ],
};
