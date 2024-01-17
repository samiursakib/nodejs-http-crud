import { v4 as uuid } from 'uuid';
import fs from 'fs/promises';
import path from 'path';

(async () => {
  const filepath = path.join(import.meta.dirname, './db.json');
  try {
    const casts = await fs.readFile(filepath, 'utf8');
    const castsWithId = JSON.parse(casts).map((cast) => ({
      id: uuid(),
      ...cast,
    }));
    console.log(casts);
    try {
      await fs.writeFile(filepath, JSON.stringify(castsWithId), 'utf8');
    } catch (e) {
      console.log('# error while writing ids\n', e);
    }
  } catch (e) {
    console.log('# error while generating ids\n', e);
  }
})();
