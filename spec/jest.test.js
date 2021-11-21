

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

describe('Homepage endpoint works', () => {
	it('questions post request should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.get('/');

		expect(response.statusCode).toBe(200);
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

describe('Questions get endpoint', () => {
	it('questions get request for specific questions should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.get('/qa/questions/1&count=2');

		expect(response.statusCode).toBe(200);
	});
});

describe('Questions get endpoint', () => {
	it('questions get request without params should fail', async () => {
		const response = await request(baseUrl)
			.get('/qa/questions/w');

		expect(response.statusCode).toBe(404);
	});
});