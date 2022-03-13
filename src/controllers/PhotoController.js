import multer from 'multer';

import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('arquivo');

class PhotoController {
  // eslint-disable-next-line class-methods-use-this
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      const { filename, originalname } = req.file;
      const foto = await Foto.create({ filename, originalname });

      return res.json(foto);
    });
  }
}

export default new PhotoController();
