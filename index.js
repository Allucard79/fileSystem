function start() {
var fs = require('fs');

    fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
        console.log('Dane po zapisaniu');
        console.log(data);
        fs.readdir('.', 'utf-8', function(err, data) {
            console.log(data);
            fs.writeFile('./dir.txt', data, 'utf-8', (err) => {
                if (err) throw err;
                console.log('Zapisano.');    
            });
        });
    });
}
start();