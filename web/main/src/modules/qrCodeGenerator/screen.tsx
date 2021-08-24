import React, { useState } from 'react';
import { QRCodeSVG, QRCodeCanvas } from '@cheprasov/qrcode';

export default function QRCodeGeneratorScreen(): JSX.Element {
  const [qrCodeText, setQrCode] = useState('mario');
  const [qrCodePNG, setQrCodePNG] = useState('mario');
  const [qrCodeSVG, setQrCodeSVG] = useState('mario');

  React.useEffect(() => {
    const config = {
      level: 'Q',
      image: {
        source:
          'https://www.alura.com.br/assets/img/home/icon-home-onda.1617662393.svg',
        width: '20%',
        height: '20%',
        x: 'center',
        y: 'center',
      },
    };
    const qrSVG = new QRCodeSVG(qrCodeText, config);
    setQrCodeSVG(qrSVG.toString());

    const qrCanvas = new QRCodeCanvas(qrCodeText, config);
    setQrCodePNG(qrCanvas.toDataUrl());

    // const png = ctx.canvas.toDataURL('png');
    // setQrCodePNG(png);
    // const canvas = (ctx as unknown as { __canvas: HTMLCanvasElement })
    //   .__canvas as HTMLCanvasElement;

    // QRCode.toCanvas(ctx.canvas, qrCodeText, { width: 320, margin: 4 }, () => {
    //   const png = ctx.canvas.toDataURL('png');
    //   setQrCodePNG(png);
    //   const output = {
    //     png,
    //     svg: ctx.getSerializedSvg(true),
    //   };

    //   console.log(output);
    // });
  }, [qrCodeText]);

  return (
    <div>
      <h1>QRCode for: {`"${qrCodeText}"`}</h1>

      <div>
        <input
          placeholder="Put a URL or any text that you want"
          value={qrCodeText}
          onChange={(event) => setQrCode(event.target.value || '')}
        />
      </div>
      <div>
        <a href={qrCodePNG} download>
          Download PNG
        </a>
        <button type="button">Download SVG</button>
      </div>

      <div>
        <div dangerouslySetInnerHTML={{ __html: qrCodeSVG }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={qrCodePNG} alt="Generated QRCode" />
      </div>
    </div>
  );
}
