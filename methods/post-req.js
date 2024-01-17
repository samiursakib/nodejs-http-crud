import fs from 'fs/promises';
import path from 'path';
import { getCasts } from '../utils/query-db.js';
import { v4 as uuid } from 'uuid';

export const handlePostReq = (req, res) => {
  if (req.url === '/casts') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', async () => {
      try {
        const casts = await getCasts();
        const updatedCasts = [
          ...casts,
          {
            id: uuid(),
            ...JSON.parse(body),
          },
        ];
        try {
          await fs.writeFile(
            path.join(import.meta.dirname, '../data/db.json'),
            JSON.stringify(updatedCasts),
            'utf8'
          );
        } catch (e) {
          console.log('# error while writing to db\n', e);
        }
      } catch (e) {
        console.log('# error while reading db\n', e);
      }
    });
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        title: 'Task successful',
        message: 'New cast is added',
      })
    );
  }
};
