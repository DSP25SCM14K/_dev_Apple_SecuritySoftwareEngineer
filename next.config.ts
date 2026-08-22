import type { NextConfig } from "next";

const repository = "_dev_Apple_SecuritySoftwareEngineer";
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
  ...(isPages ? { basePath: `/${repository}`, assetPrefix: `/${repository}/` } : {}),
};

export default nextConfig;
