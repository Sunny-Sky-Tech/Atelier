import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://localhost:8080/qa/questions/id&count=5');
  sleep(1);
}

export default function () {
  const url = 'http://localhost:8080/qa/questions';
  const payload = JSON.stringify([{
    body: "Bob",
    name: "jack",
    email: 'aaa@aaa.com',
    product_id: 1
  }]);

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
// Run with docker command
//  sudo  docker run --add-host=host.docker.internal:host-gateway -i loadimpact/k6 run - <spec/k6/script.js