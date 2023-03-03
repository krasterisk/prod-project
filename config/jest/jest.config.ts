/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path'

export default {
    globals: {
        __IS_DEV__: true,
        __API__: ''
    },
    clearMocks: true,
    coverageProvider: 'v8',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    rootDir: '../../',
    testEnvironment: 'jsdom',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    preset: 'ts-jest',
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '@/(.*)': '<rootDir>/src/$1'
    }
}
