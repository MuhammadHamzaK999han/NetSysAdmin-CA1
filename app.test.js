const request = require('supertest');
const app = require('./app');

describe('API tests', () => {
  test('GET / returns 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('GET /health returns UP', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('UP');
  });

  test('GET /api/info returns app details', async () => {
    const res = await request(app).get('/api/info');
    expect(res.body.app).toBe('cicd-webapp');
  });

  test('POST /api/echo returns sent data', async () => {
    const res = await request(app).post('/api/echo').send({ name: 'test' });
    expect(res.statusCode).toBe(201);
    expect(res.body.received.name).toBe('test');
  });
});