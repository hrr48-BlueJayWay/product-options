const app = require('../../server/app.js');
const request = require('supertest');
const db = require('../../db/')

beforeEach(() => {
  db.mongoose.connect('mongodb://localhost/mykea', { useNewUrlParser: true })
})

afterEach(() => {
  db.mongoose.connection.close();
})

describe('Testing Endpoints', () => {
  test('/products/45 should respond with item 45', () => {
    return request(app)
      .get('/products/45')
      .then((results) => {
        expect(results.body.id).toBe('45');
      })
  })
})
