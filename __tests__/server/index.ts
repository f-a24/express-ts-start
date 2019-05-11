import supertest from 'supertest';
import routes from '../../src/server/routes';

describe('routes', () => {
  test('routes', () => {
    supertest(routes)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
