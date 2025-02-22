import fs from 'fs'

export default defineConfig({
  define: {
    'process.env.APP_VERSION': JSON.stringify(
      fs.existsSync('./version.txt') 
        ? fs.readFileSync('./version.txt', 'utf-8').trim()
        : 'dev'
    )
  },
}) 