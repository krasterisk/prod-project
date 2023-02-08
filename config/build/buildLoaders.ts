import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildOptions} from "./types/config";

export function buildLoaders({isDev}: buildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const imgLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const cssLoader = {
        test: /\.[cs][ac]?ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]',
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ]
    }
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    return [
        typeScriptLoader,
        cssLoader,
        svgLoader,
        imgLoader,
    ]
}