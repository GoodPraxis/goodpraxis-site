import React from 'react';
import { Helmet } from 'react-helmet';

const ROOT_URL = 'https://goodpraxis.coop/';

export default () => (
  <Helmet
    title="Good Praxis"
    meta={[
      {
        name: 'description',
        content: 'London based co-op offering digital and design services',
      },
      {
        name: 'keywords',
        content: 'digital agency, co-op, design, london',
      },
      {
        property: 'og:title',
        content: 'Good Praxis - digital co-op based in London',
      },
      {
        property: 'og:description',
        content: 'We are a worker-owned co-operative established to build'
            + 'creative and thoughtful work that is in line with our values. We'
            + ' believe in being socially-aware, considerate and fair to '
            + 'everyone involved.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: ROOT_URL },
      { property: 'og:image', content: `${ROOT_URL}images/logo-closeup.png` },
      { property: 'og:locale', content: 'en_GB' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@goodpraxiscoop' },
    ]}
  />
);
