import * as uuid from 'uuid';
import * as path from 'path';
import { UploadedFile } from 'express-fileupload';

class File {
  async save(file: UploadedFile) {
    try {
      const filename = `${uuid.v4()}.mp3`;
      const filepath = path.resolve('static', filename);
      await file.mv(filepath);
      return filename;
    } catch (error) {
      throw error;
    }
  }
}

export const fileService = new File();
