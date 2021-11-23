import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://localhost:8080/qa/questions/id&count=5');
  sleep(1);
}

// Run with docker command
//  sudo  docker run --add-host=host.docker.internal:host-gateway -i loadimpact/k6 run - <spec/k6/script.js