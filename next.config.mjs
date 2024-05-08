/** @type {import('next').NextConfig} */
import dotenv from "dotenv"
const nextConfig = {};
dotenv.config({
    path: './src/.env.local',
  });
export default nextConfig;
