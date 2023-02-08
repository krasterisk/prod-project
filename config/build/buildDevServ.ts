import { type buildOptions } from './types/config'
import { type Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServ (options: buildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
