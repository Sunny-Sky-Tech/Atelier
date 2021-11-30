import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '30s', target: 250 },
    { duration: '30s', target: 500 },
    { duration: '30s', target: 1000 },
    { duration: '40s', target: 0 },
  ],
};



const randomID = Math.round((Math.random() * (1000000)) + 1)
const randomCount = Math.round((Math.random() * (1000000)) + 1)
export default function () {
  const res = http.get(`http://localhost:8080/qa/questions/${randomID}&count=${randomCount}`);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}