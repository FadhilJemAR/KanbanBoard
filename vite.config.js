import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({

  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType:'autoUpdate',
      includeAssets:['favicon.svg','icons.svg'],
      manifest:{
        name:'Kanban Board',
        short_name:"KanbanB",
        description:"Catat aktivitas atau tugas yang ingin kamu lakukan",
        theme_color:"#ffffff",
        
      }
    })
  ],
})
