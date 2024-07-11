import multer from 'multer'
import { v4 } from 'uuid'
import { extname, resolve } from 'path'

// extname pega só a extensão do arquivo (ex:.png)

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      return callback(null, v4() + extname(file.originalname)) // espera um fracasso ou sucesso
    },
  }),
}
