import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        ilaunch: resolve(__dirname, 'projects/ilaunch.html'),
        cgiCapstone: resolve(__dirname, 'projects/cgi-capstone.html'),
        trafficFlowSimulation: resolve(__dirname, 'projects/traffic-flow-simulation.html'),
        skills: resolve(__dirname, 'skills/index.html'),
      },
    },
  },
})
