import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Automatically detect base path from GITHUB_REPOSITORY env var (e.g. "AILOGYAsisstant/AILOGY" -> "/AILOGY/")
// Falls back to '/AILOGY/' for local development
const repoName = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/AILOGY/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: repoName,
})
