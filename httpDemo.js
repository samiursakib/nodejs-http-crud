import http from 'http';

// const bootdevURL = 'https://boot.dev/learn/learn-python';
// const urlObj = new URL(bootdevURL);
// console.log(urlObj.hostname);

// const fantasyQuestURL =
//   'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id';
// const urlOBJ = new URL(fantasyQuestURL);
// console.log(urlOBJ);

const stringify = (data) => JSON.stringify(data);

const user = {
  name: 'Rafi Sakib',
  age: 25,
  email: 'rafisamiur@gmail.com',
};

const server = http.createServer(async (req, res) => {
  if (req.url === '/') {
    // at /
    if (req.method === 'GET') {
      // GET method
      res.end(stringify({ message: 'GET method at /' }));
    } else if (req.method === 'POST') {
      // POST method
      res.end(stringify({ message: 'POST method at /' }));
    }
  } else if (req.url === '/user') {
    // at /user
    if (req.method === 'GET') {
      // GET method
      res.end(stringify(user));
    } else if (req.method === 'POST') {
      // POST method
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        // const searchParams = new URL('http://example.com?' + body).searchParams;
        // console.log(searchParams.entries());
        const parsedJSON = JSON.parse(
          '{"' + body.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
          (key, value) => (key === '' ? value : decodeURIComponent(value))
        );
        res.end(stringify(parsedJSON));
      });
      req.on('error', (e) => {
        console.error(e);
      });
    }
  }
});

server.listen(8080, () => console.log('server listening at port 8080...'));
