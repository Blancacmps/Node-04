var fs = require('fs');

fs.appendFile('novoarquivo.txt', 'Arquivo craido com sucesso!', function (err) {
    if (err) throw err; 
    console.log('Arquivo criado...');
});


