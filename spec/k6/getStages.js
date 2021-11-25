import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 250 }, // below normal load
    { duration: '30s', target: 500 }, // normal load
    { duration: '30s', target: 1000 }, // around breaking point
    { duration: '30s', target: 2000 }, // beyond breaking point
    { duration: '40s', target: 0 }, // scale down, recovery stage
  ],
};



const random1 = Math.round((Math.random() * (1000011 - 1)) + 1)
const random2 = Math.round((Math.random() * (1000011 - 1)) + 1)
export default function () {
  const res = http.get(`http://localhost:8080/qa/questions/${random1}&count=${random2}`);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}