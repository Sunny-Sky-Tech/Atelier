import http from 'k6/http';
import { sleep } from 'k6';

// export const options = {
//   vus: 600,
//   duration: '30s',
// };

export const options = {
  scenarios: {
    // constant_request_rate_1: {
    //   executor: 'constant-arrival-rate',
    //   rate: 1,
    //   timeUnit: '1s',
    //   duration: '1m',
    //   preAllocatedVUs: 20,
    //   maxVUs: 500,
    // },
    // constant_request_rate_10: {
    //   executor: 'constant-arrival-rate',
    //   rate: 10,
    //   timeUnit: '1s',
    //   duration: '1m',
    //   preAllocatedVUs: 20,
    //   maxVUs: 500,
    // },
    // constant_request_rate_100: {
    //   executor: 'constant-arrival-rate',
    //   rate: 100,
    //   timeUnit: '1s',
    //   duration: '1m',
    //   preAllocatedVUs: 20,
    //   maxVUs: 500,
    // },
    constant_request_rate_1000: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 500,
      maxVUs: 2000,
    },
  },
};

const random1 = Math.round((Math.random() * (1000011 - 1)) + 1)
const random2 = Math.round((Math.random() * (1000011 - 1)) + 1)
export default function () {
  http.get(`http://localhost:8080/qa/questions/1&count=5`);
  sleep(1);
}


// Run with docker command
//  sudo  docker run --add-host=host.docker.internal:host-gateway -i loadimpact/k6 run - <spec/k6/script.js