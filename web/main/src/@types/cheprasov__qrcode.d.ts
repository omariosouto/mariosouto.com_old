interface Config {
  level?: 'Q';
  bgColor?: string;
  fgColor?: string;
  size?: {
    width: number;
    height: number;
  };
}

declare module '@cheprasov/qrcode' {
  export class QRCodeSVG {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    constructor(text: string, options?: Config): void {}
  }
}
