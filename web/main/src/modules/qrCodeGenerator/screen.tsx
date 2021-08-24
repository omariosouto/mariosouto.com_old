import React, { useState } from 'react';
import { QRCodeSVG } from '@cheprasov/qrcode';
import html2canvas from 'html2canvas';

export default function QRCodeGeneratorScreen(): JSX.Element {
  const [size, setSize] = useState(50);

  const [qrCodeText, setQrCode] = useState('mario');
  const [qrCodePNG, setQrCodePNG] = useState('');
  const [qrCodeSVG, setQrCodeSVG] = useState('');

  React.useEffect(() => {
    const config = {
      level: 'Q',
      bgColor: 'red',
      fgColor: 'white',
      size: {
        width: size,
        height: size,
      },
    };
    const qrSVG = new QRCodeSVG(qrCodeText, config);
    setQrCodeSVG(qrSVG.toString());

    setTimeout(() => {
      html2canvas(document.querySelector('#qrcode_svg_container')).then(
        (qrCanvas) => {
          setQrCodePNG(qrCanvas.toDataURL());
          // setQrCodePNG(qrCanvas);
        }
      );
    }, 1000);
  }, [qrCodeText, size]);

  return (
    <div>
      <h1>QRCode for: {`"${qrCodeText}"`}</h1>

      <div>
        <label>
          QRCode Text:{' '}
          <input
            placeholder="Put a URL or any text that you want"
            value={qrCodeText}
            onChange={(event) => setQrCode(event.target.value || '')}
          />
        </label>
        <label>
          Width:{' '}
          <input
            value={size}
            type="number"
            onChange={(event) => setSize(Number(event.target.value) || 100)}
          />
        </label>
      </div>
      <div>
        <a href={qrCodePNG} download="qrcode.png">
          Download PNG
        </a>
        <button
          type="button"
          onClick={() => {
            const svg = document.querySelector(
              '#qrcode_svg_container'
            ).innerHTML;
            const blob = new Blob([svg.toString()]);
            const element = document.createElement('a');
            element.download = 'w3c.svg';
            element.href = window.URL.createObjectURL(blob);
            element.click();
            element.remove();
          }}
        >
          Download SVG
        </button>
      </div>

      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <h1>SVG</h1>
        <div
          id="qrcode_svg_container"
          style={{ maxWidth: `${size}px` }}
          dangerouslySetInnerHTML={{ __html: qrCodeSVG }}
        />

        {qrCodePNG && (
          <>
            <h1>PNG</h1>
            <img src={qrCodePNG} alt="QR Code Generated" />
          </>
        )}
      </div>
    </div>
  );
}
