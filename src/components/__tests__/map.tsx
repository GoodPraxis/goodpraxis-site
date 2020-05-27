import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Map, { MapContainer } from '../map';

describe('Map', () => {
  it('renders loading container correctly', () => {
    const tree = renderer
      .create(<Map />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders map container correctly', () => {
    const tree = renderer
      .create(<MapContainer google={null} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
