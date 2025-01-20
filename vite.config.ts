import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        // 全局变量
        modifyVars: {
          "@nav-width": '50px',
          "@primary-color": '#000',
        },
        javascriptEnabled: true, // 允许 Less 中使用 JavaScript 表达式
      },
    },
  }
})
