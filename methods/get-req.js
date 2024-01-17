import { getCasts } from '../utils/query-db.js';

export const handleGetReq = async (req, res) => {
  if (req.url === '/casts') {
    const casts = await getCasts();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(casts));
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
