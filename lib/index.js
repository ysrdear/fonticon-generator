const { program } = require('commander');


const fontGenerator = require('./fontGenerator')

program
    .option('-s, --source <source>', 'svg files source path')
    .option('-d, --dist <dist>', 'ttf files dist path')
    .option('-c, --cssDist <cssDist>', 'css files dist path')
    .option('-n --name <name>', 'ttf files name', 'iconFont')
    .option('-c --cssName <cssName>', 'css files name', 'iconFont')
    .option('-f --fontName <fontName>', 'font family name', 'iconFont')
    .option('-p --prefix <prefix>', 'font name prefix name', 'if-')

program.parse();
const options = program.opts();

fontGenerator(options)

