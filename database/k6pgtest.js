import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 1,
  stages: [
    { duration: "10s", target: 100 },
    { duration: "10s", target: 250 },
    { duration: "10s", target: 500 },
    { duration: "10s", target: 250 },
    { duration: "10s", target: 100 },
  ],
};
// default
// export default function () {
//   http.get("http://test.k6.io");
//   sleep(1);
// }

// request for item by id w/ static id
export default function () {
  http.get("http://localhost:8008/items/9876784");
}

// request for item by id w/ random id
// export default function () {
//   http.get(
//     `http://localhost:8008/items/${Math.floor(Math.random() * 10000000) + 1}`
//   );
// }

// request for item by name
