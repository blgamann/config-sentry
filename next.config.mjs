// next.config.mjs
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  org: "tishoo",
  project: "tishoo-app-nextjs",
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
});
