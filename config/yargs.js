
const opts = {
    
    base: {

        demand:true
       },
       limite: {
           alias: 'l',
           default:10
       }

}

const argv = require('yargs')
.command('listar','imprime consola la tabla de multiplicar',

    opts


).command('crear','genera un archivo con la tabla de multiplicar',
    opts

)
.argv;


module.exports = {
  argv
}