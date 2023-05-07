import { Project } from 'ts-morph'
import path from 'path'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui')
const sharedUiDirectory = project.getDirectory(uiPath)
const componentDirs = sharedUiDirectory?.getDirectories()

function isAbsolute (value: string) {
    const layers = ['shared', 'app', 'entities', 'features', 'widgets', 'pages']
    return layers.some((layer) => value.startsWith(layer))
}

componentDirs?.forEach(dir => {
    const indexFilePath = `${dir.getPath()}/index.ts`
    const indexFile = dir.getSourceFile(indexFilePath)
    if (!indexFile) {
        const sourceCode = `export * from './${dir.getBaseName()}'`
        const file = dir.createSourceFile(indexFilePath, sourceCode, { overwrite: true })
        file.save()
    }
})

files.forEach(sourceFile => {
    const importDeclaration = sourceFile.getImportDeclarations()
    importDeclaration.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue()
        const valueWithOutAlias = value.replace('@/', '')
        const segments = valueWithOutAlias.split('/')
        const isSharedLayer = segments?.[0] === 'shared'
        const isUiSlice = segments?.[1] === 'ui'

        if (isAbsolute(valueWithOutAlias) && isSharedLayer && isUiSlice) {
            const result = valueWithOutAlias.split('/').slice(0, 3).join('/')
            importDeclaration.setModuleSpecifier(`@/${result}`)
        }
    })
})

project.save()
