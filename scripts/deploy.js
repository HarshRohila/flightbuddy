import { publish } from "gh-pages";

await publish(
  "public",
  {
    cname: "flightbuddy.in",
  },
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);
