declare module 'wowjs' {
  class WOW {
    constructor(options?: { live?: boolean });
    init(): void;
  }
  
  const WOW: typeof WOW;
  export default WOW;
  export { WOW };
}
