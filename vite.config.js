import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 產品、開發中 的路徑䛀定
  // ? 的後面是 正式環境(reace-week1)，
  // ： 的後面是 開發中環境。
  base: process.env.NODE_ENV === 'production' ? '/reace-week1/' : '/',
  plugins: [react()],
})
