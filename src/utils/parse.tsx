import React from 'react';
import { Link } from 'gatsby';
// eslint-disable-next-line
import parse, { domToReact, DomElement } from 'html-react-parser';

const options = {
  // eslint-disable-next-line
  replace: ({ attribs, children }: DomElement) => {
    if (!attribs) return null;

    if (attribs.href) {
      const { href } = attribs;
      if (href.startsWith('http')) {
        return (
          <a href={href} rel="noopener noreferrer" target="_blank">
            {domToReact(children, options)}
          </a>
        );
      }
      return <Link to={href}>{domToReact(children, options)}</Link>;
    }

    return null;
  },
};

export default (markup: string) => parse(markup, options);
