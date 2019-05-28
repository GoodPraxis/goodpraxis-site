import React from 'react';
import renderer from 'react-test-renderer';

import Card from '../card/card';

describe('Card', () => {
  it('renders default type correctly', () => {
    const tree = renderer
      .create(<Card>Unit test</Card>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  ['primary', 'secondary', 'tertiary'].forEach((type) => {
    it(`renders ${type} type correctly`, () => {
      const tree = renderer
        .create(<Card type={type}>Unit test</Card>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it('renders empty card correctly', () => {
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
