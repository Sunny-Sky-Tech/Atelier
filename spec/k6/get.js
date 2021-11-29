import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '30s',
};


const random1 = Math.round((Math.random() * (1000011 - 1)) + 1)
const random2 = Math.round((Math.random() * (1000011 - 1)) + 1)
export default function () {
  http.get(`http://localhost:8080/qa/questions/${random1}&count=${random2}`);
  sleep(1);
}


// Run with docker command
//  sudo  docker run --add-host=host.docker.internal:host-gateway -i loadimpact/k6 run - <spec/k6/script.js