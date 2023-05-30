import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type buildEnv, type buildPaths, buildMode } from './config/build/types/config'
import path from 'path'

function getApiUrl(mode: buildMode, apiUrl?: string) {
    if (apiUrl) {
        return  apiUrl
    }

    if (mode === 'production') {
        return '/api'
    }

        return 'http://192.168.2.37:7000/api'
}

export default (env: buildEnv) => {
    const paths: buildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales')
    }

    const mode = env?.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env?.port || 3000
    const apiUrl = getApiUrl(mode, env?.apiUrl)

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        isDev,
        paths,
        port: PORT,
        apiUrl,
        project: 'frontend'
    })

    return config
}
