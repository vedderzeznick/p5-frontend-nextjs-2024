import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { dbAddAlbum } from '@/lib/albums';
import fs from 'fs';
import path from 'path';

declare module 'next' {
    interface NextApiRequest {
      file: any;
    }
  }
// Set up Multer storage
const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Helper function to parse form-data using Multer
const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, so Multer can handle it
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  await runMiddleware(req, res, upload.single('cover'));

  const { title, artistId } = req.body;
  const coverUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

  await dbAddAlbum(title, parseInt(artistId, 10), coverUrl);

  res.status(200).json({ message: 'Album created successfully' });
}
