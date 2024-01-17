import http from 'http';
import { handleGetReq } from './methods/get-req.js';
import { handlePostReq } from './methods/post-req.js';
import { handlePutReq } from './methods/put-req.js';
import { handleDeleteReq } from './methods/delete-req.js';

const PORT = process.env.PORT | 8080;
const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      handleGetReq(req, res);
      break;
    case 'POST':
      handlePostReq(req, res);
      break;
    case 'PUT':
      handlePutReq(req, res);
      break;
    case 'DELETE':
      handleDeleteReq(req, res);
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          title: 'Not found',
          message: 'Routing failed for invalid method',
        })
      );
  }
});

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
