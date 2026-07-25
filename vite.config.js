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
      manifest:{
        name:'Kanban Board',
        short_name:"KanBoard",
        description:"Catat aktivitas atau tugas yang ingin kamu lakukan",
        theme_color:"#ffffff",
        icons:[
          {
            src:"/images/512.png",
            sizes:"512x512",
            type:"image/png"
          },
           {
            src:"/images/192.png",
            sizes:"192x192",
            type:"image/png"
          }
        ]
      }
    })
  ],
})
