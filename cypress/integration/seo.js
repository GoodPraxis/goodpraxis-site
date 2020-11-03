import CONFIG from '../../gatsby-config.js';

describe('SEO tests', () => {
  const { siteMetadata } = CONFIG;
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have description', () => {
    cy.get('meta[name="description"]')
      .should('have.attr', 'content', siteMetadata.description);
  });
});
