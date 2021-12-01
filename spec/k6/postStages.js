import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 250 }, // below normal load
    { duration: '30s', target: 500 }, // normal load
    // { duration: '30s', target: 1000 }, // around breaking point
    // { duration: '30s', target: 2000 }, // beyond breaking point
    { duration: '40s', target: 0 }, // scale down, recovery stage
  ],
};




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

  const res = http.post(url, payload, params);;
  check(res, { 'status was 201': (r) => r.status == 201 });
  sleep(1);
}