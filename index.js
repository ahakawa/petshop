const http = require('http');
const petshop = require('./petshop');

const server = http.createServer((req, res) => {

    if(req.url == "/listaspets" || req.url == "listasPets"){
        let resultado = petshop.listarPets();
        return res.end(resultado);

    }

   res.setHeader("Content-type","text/html;charset=utf8") //configura para mostrar os caracteres especiais(ex:acentuação)
   res.write("Você está dentro do sistema petshop!") // escreve várias mensagens 
   res.end()
})

server.listen(3002, 'localhost');