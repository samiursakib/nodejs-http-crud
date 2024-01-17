import fs from 'fs/promises';
import path from 'path';

export const getCasts = async () => {
  try {
    const filepath = path.join(import.meta.dirname, '../data/db.json');
    const casts = await fs.readFile(filepath, 'utf8');
    return JSON.parse(casts);
  } catch (e) {
    console.log('# error while reading db\n', e);
  }
};
