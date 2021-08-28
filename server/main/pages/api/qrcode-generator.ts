import { NextApiRequest, NextApiResponse } from 'next';
import { QRCodeSVG } from '@cheprasov/qrcode';
import { svg2png } from 'svg-png-converter';

type QRCodeTypes = 'png' | 'svg';
function QRCodeGenerator(text: string, size) {
  const qrSVG = new QRCodeSVG(text, {
    level: 'H',
  });
  const svg = qrSVG.toString()
    .replace('xmlns:xlink="http://www.w3.org/1999/xlink"', `xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}"`);

  return {
    async svg(res?: NextApiResponse) {
      res && res.setHeader('Content-Type', 'image/svg+xml');
      return svg;
    },
    async png(res?: NextApiResponse) {
      res && res.setHeader('Content-Type', 'image/png');

      let s = await svg2png({ 
        input: `
      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      ${svg}
      `.trim(), 
        encoding: 'buffer', 
        format: 'png',
      })

      return s;
    }
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const text = req.query.text as string || 'oi';
  const size = Number(req.query.size) || 200;
  const type = req.query.type as QRCodeTypes || 'svg';
  const generatorStrategy = QRCodeGenerator(text, size)[type] && QRCodeGenerator(text, size)[type];

  console.log(type, generatorStrategy);

  const file = await generatorStrategy(res);
  res.end(file);
}
