import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://host.docker.internal:8080');
  sleep(1);
}

// Run with docker command
//  sudo  docker run --add-host=host.docker.internal:host-gateway -i loadimpact/k6 run - <spec/k6/script.js