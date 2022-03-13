import multer from 'multer';
import { extname, resolve } from 'path';

const num = () => Math.floor(Math.random() * 1000000 + 1000000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('O arquivo deve ser JPEG ou PNG'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${num()}${extname(file.originalname)}`);
    },

  }), // Salva imagem no disco
};
