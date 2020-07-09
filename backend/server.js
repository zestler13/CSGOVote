//Import
var express = require('express');//si comme si j'import
const fs = require('fs').promises;

//Instantiate server autrement je declare serveur de type express
var server = express();

//configure routes
server.get('/api/maps', function (req, res) {
    extractMaps('C:\\Program Files (x86)\\Steam\\steamapps\\common\\Counter-Strike Global Offensive\\csgo\\maps')
        .then((result) => res.status(200).send(result))
        .catch((result) => console.log(result));
});

//launch server 
server.listen(8080);

async function extractMaps(path) {
    const files = await fs.readdir(path);
    const maps = [];
    for (const file of files) {
        const result = file.split('.').pop();
        if (result === 'jpg') {
            maps.push(file);
        }
    }
    return maps;
}	
