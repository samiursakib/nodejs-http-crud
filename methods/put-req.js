import fs from 'fs/promises';
import path from 'path';
import { getCasts } from '../utils/query-db.js';

export const handlePutReq = (req, res) => {
  if (req.url === '/casts/update') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', async () => {
      try {
        body = JSON.parse(body);
        const casts = await getCasts();
        const updatedCasts = casts.map((cast) =>
          body.id === cast.id ? body : cast
        );
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
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          title: 'Task successful',
          message: 'Cast information is updated',
        })
      );
    });
  } else {
    res.writeHead(404);
    res.end(
      JSON.stringify({
        title: 'Not found',
        message: 'Route not available',
      })
    );
  }
};
