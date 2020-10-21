const React = require('react');
const ContextProvider = require('./src/components/menu-provider').default;

// eslint-disable-next-line
exports.wrapRootElement = ({ element }) => (
  // eslint-disable-next-line
  <ContextProvider>{element}</ContextProvider>
);
