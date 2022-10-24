/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import { parse } from 'csv-parse';

export class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const csvFile = parse();
    stream.pipe(csvFile);

    csvFile.on('data', async (line) => {
      console.log(line);
    });
    console.log(file);
  }
}
