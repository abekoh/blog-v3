import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "pnpm preview",
    port: 4321,
    timeout: 10 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: process.env.CI ? "http://0.0.0.0:4321/" : "http://localhost:4321/",
  },
});
