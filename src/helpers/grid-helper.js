const DEFAULT_WIDTH = 'full';

export default function getGrid(
  sm = DEFAULT_WIDTH, md = DEFAULT_WIDTH, lg = DEFAULT_WIDTH,
) {
  return `grid-${sm}-sm grid-${md}-md grid-${lg}-lg`;
}
