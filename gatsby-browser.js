/* eslint-disable import/prefer-default-export */
import Switcher from './src/components/palette-switcher/palette-switcher';

export function onInitialClientRender() {
  const switcher = new Switcher('palette-alternative');
  switcher.enable();
}
