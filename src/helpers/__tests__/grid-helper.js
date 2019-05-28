import getGrid from '../grid-helper';

describe('getGrid()', () => {
  it('returns default classnames', () => {
    expect(getGrid()).toBe('grid-full-sm grid-full-md grid-full-lg');
  });

  it('returns specified classnames', () => {
    expect(getGrid('half', 'half-narrow', 'full-narrow'))
      .toBe('grid-half-sm grid-half-narrow-md grid-full-narrow-lg');
  });
});
