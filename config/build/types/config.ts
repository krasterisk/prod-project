
export type buildMode = 'production' | 'development'

export interface buildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface buildOptions {
    mode: buildMode
    paths: buildPaths
    isDev: boolean
    port: number
    apiUrl: string
}

export interface buildEnv {
    mode: buildMode
    port: number
    apiUrl: string
}
