import { NextApiRequest, NextApiResponse } from 'next';
import qr from 'qr-image';

type QRCodeTypes = 'png' | 'svg';
function QRCodeGenerator(text: string, size) {
  return {
    async svg(res?: NextApiResponse) {
      res && res.setHeader('Content-Type', 'image/svg+xml');
      qr.image(text, { type: 'svg', size: size / 23, margin: 2 })
        .pipe(res);
    },
    async png(res?: NextApiResponse) {
      res && res.setHeader('Content-Type', 'image/png');

      qr.image(text, { type: 'png', margin: 2, size: size / 25 })
        .pipe(res);
    }
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const text = req.query.text as string || 'oi';
  const size = (Number(req.query.size) || 200);
  const type = req.query.type as QRCodeTypes || 'svg';
  const generatorStrategy = QRCodeGenerator(text, size)[type] && QRCodeGenerator(text, size)[type];
  await generatorStrategy(res);
}
