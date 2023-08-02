const webfontsGenerator = require('webfonts-generator')
const {glob} = require('glob')
const path = require('path')

const fontGenerator = async (options)=>{

    const files = await glob(options.source + '/*.svg')
    const cwd = process.cwd()

    const dist = path.resolve(cwd, options.dist)

    const cssDest = path.resolve(cwd, options.cssDist)

    const cssFileDist = path.join(cssDest, options.cssName + '.css')

    const cssPath = path.resolve(__dirname, "./cssTemplate.hbs");

    const cssFontPath = path.relative(cssDest, dist)

    const prefixStr = options.prefix + 'font-'

    webfontsGenerator({
        files:files,
        dest: dist,
        cssDest: cssFileDist,
        cssFontsUrl:cssFontPath ,
        fontName: options.fontName,
        cssTemplate: cssPath,
        templateOptions: {
            classPrefix: prefixStr
        },
        types: ['ttf','woff']
    })

}



module.exports = fontGenerator
