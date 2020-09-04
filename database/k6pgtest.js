import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 1,
  stages: [
    { duration: "30s", target: 100 },
    { duration: "1m", target: 200 },
    { duration: "1m", target: 300 },
    { duration: "1m", target: 500 },
    { duration: "1m", target: 750 },
    { duration: "1m", target: 1000 },
    { duration: "20m", target: 1000 },
    { duration: "1m", target: 750 },
    { duration: "1m", target: 500 },
    { duration: "1m", target: 250 },
    { duration: "1m", target: 100 },
  ],
};
// default
// export default function () {
//   http.get("http://test.k6.io");
//   sleep(1);
// }

// request for item by id w/ static id
// export default function () {
//   let res = http.get("http://localhost:8008/items/9876784");
//   check(res, {
//     "is status 200": (r) => r.status === 200,
//   });
//   // value passed in is in seconds, not ms
//   sleep(0.5);
// }

// request for item by id w/ random id
export default function () {
  let res = http.get(
    `http://localhost:8008/items/${Math.floor(Math.random() * 10000000) + 1}`
  );
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
  // value passed in is in seconds, not ms
  sleep(0.5);
}

// request for item by name
