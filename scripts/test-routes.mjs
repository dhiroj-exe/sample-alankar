import http from 'http';
import { spawn } from 'child_process';

const testServer = spawn('pnpm', ['start', '-p', '3006'], { shell: true });

setTimeout(async () => {
  console.log('Started test server on port 3006, testing routes...');

  const routes = [
    '/',
    '/collections',
    '/about',
    '/contact',
    '/collections/padmavati-uncut-polki-choker',
    '/collections/imperial-silver-pooja-thali-royal-suite',
    '/collections/begum-gulabi-zardozi-bridal-potli',
  ];

  for (const route of routes) {
    await new Promise((resolve) => {
      http.get(`http://localhost:3006${route}`, (res) => {
        console.log(`Route ${route} => Status ${res.statusCode}`);
        resolve();
      }).on('error', (err) => {
        console.log(`Route ${route} => Error: ${err.message}`);
        resolve();
      });
    });
  }

  testServer.kill();
  process.exit(0);
}, 3000);
