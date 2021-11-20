

// Link to server
const app = require('./app.js')
// Supertest.
const request = require('supertest')
// const request = supertest(app)
import 'regenerator-runtime/runtime'


// Initial test for Jest

// it('Testing to see if Jest works', () => {
//   expect(1).toBe(1)
// })


describe('Space test suite', () => {
  it('MySpace Test', () => {
      expect(true).toEqual(true);
  });
});


const baseUrl = 'localhost:8080';

describe('Questions endpoint', () => {
	it('questions post request should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.post('/qa/questions');

		expect(response.statusCode).toBe(200);
	});
});