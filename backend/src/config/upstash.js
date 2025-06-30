import dotenv from "dotenv";
dotenv.config()
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});


// create a ratelimiter that allows 100 requests per minute
const ratelimit = new Ratelimit({
  limiter: Ratelimit.slidingWindow(10, "10 s"),
  redis
});

export default ratelimit;
