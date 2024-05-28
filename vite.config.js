import vue from '@vitejs/plugin-vue'

export default {
    build: {
        manifest: true,
        outDir: './dist/',
        rollupOptions: {
            input: {
                app: './index.html',
            }
        }
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    server: {
        fs: {
            strict: false
        },
        origin: 'http://localhost:3000',
        port: 3000,
        strictPort: true,
    },
    plugins: [
        vue()
    ],

}