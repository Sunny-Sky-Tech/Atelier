import http from 'k6/http';

export default function () {
  const url = 'http://localhost:8080/qa/questions';
  const payload = JSON.stringify({
    body: "Bob",
    name: "jack",
    email: 'aaa@aaa.com',
    product_id: 1
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}