// Type declarations for @emnapi/runtime
declare module '@emnapi/runtime' {
  export interface EmnAPIContext {
    // Add any known types here based on actual usage
  }

  export const createContext: () => EmnAPIContext;
  export const initialize: (context: EmnAPIContext) => void;
}
