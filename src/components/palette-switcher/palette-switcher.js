export default class PalleteSwitcher {
  constructor(pallete, threshold = 0.4) {
    this.pallete = pallete;
    this.threshold = threshold;
    this.rootNode = document.documentElement;
  }

  enable() {
    this.updateHeight();
    window.addEventListener('scroll', () => this.handleScroll());
    window.addEventListener('resize', () => this.updateHeight());
  }

  handleScroll() {
    const winScroll = document.body.scrollTop || this.rootNode.scrollTop;
    const scrolled = winScroll / this.height;

    this.rootNode.classList.toggle(this.pallete, scrolled > this.threshold);
  }

  updateHeight() {
    this.height = this.rootNode.scrollHeight - this.rootNode.clientHeight;
  }
}
