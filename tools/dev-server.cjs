// Minimal EasyServer contract fixture for local development. Data lives in memory.
const http = require('node:http');
async function startServer(port = 0) {
  const records = new Map(), requests = [];
  let nextId = 1, failure = 0;
  const server = http.createServer(async (request, response) => {
    const send = (status, data) => {
      response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,DELETE,OPTIONS' });
      response.end(status === 204 ? '' : JSON.stringify(data));
    };
    try {
      if (request.method === 'OPTIONS') return send(204);
      const match = new URL(request.url, 'http://localhost').pathname.match(/^\/api\/gamedata\/game\/([^/]+)\/player\/([^/]+)$/);
      if (!match) return send(404, { message: 'Unknown route' });
      const gameId = decodeURIComponent(match[1]), playerId = decodeURIComponent(match[2]);
      const parts = []; let size = 0;
      for await (const part of request) {
        size += part.length;
        if (size > 1024 * 1024) return send(413, { message: 'Data too large' });
        parts.push(part);
      }
      const body = Buffer.concat(parts).toString('utf8');
      requests.push({ method: request.method, gameId, playerId, body });
      if (failure) return send(failure, { message: 'Injected test failure' });
      const key = JSON.stringify([gameId, playerId]);
      if (request.method === 'GET') return records.has(key) ? send(200, records.get(key).data) : send(404, { message: 'Missing record' });
      if (request.method === 'PUT') {
        let data;
        try { data = JSON.parse(body); } catch { return send(400, { message: 'Invalid JSON' }); }
        const record = { id: records.get(key)?.id || nextId++, gameId, playerId, data };
        records.set(key, record);
        return send(200, record);
      }
      if (request.method === 'DELETE') return send(records.delete(key) ? 204 : 404, { message: 'Missing record' });
      send(405, { message: 'Unsupported method' });
    } catch { if (!response.headersSent) send(500, { message: 'Server error' }); }
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(port, '127.0.0.1', resolve); });
  return { server, records, requests, setFailure: status => { failure = status; }, baseUrl: `http://127.0.0.1:${server.address().port}` };
}
module.exports = { startServer };
if (require.main === module) startServer(Number(process.env.PORT || 28515)).then(({baseUrl}) => {
  console.log(`Framework local test server: ${baseUrl}`);
  console.log('In-memory storage; restarting clears records. Development use only.');
}).catch(error => { console.error(error); process.exitCode = 1; });
