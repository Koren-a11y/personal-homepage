import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 由于是项目页（而非用户名主页），需要设置 base 为仓库名子路径
  base: '/personal-homepage/',
})
