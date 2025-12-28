import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";
import { timeouts } from "./src/config/timeouts";
dotenv.config();

export default defineConfig({
  testDir: "./tests",
  timeout: timeouts.superLongTimeout,
  retries: 1,
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure",
    trace: "on",
    video: "retain-on-failure",
  },
  reporter: [
    ["list"],
    ["html", { open: "on-failure" }],
    ["allure-playwright"],
    ["@testomatio/reporter/playwright", { apiKey: process.env.TESTOMATIO }],
  ],
});
