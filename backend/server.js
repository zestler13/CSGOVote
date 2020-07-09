//Import
var express = require('express');//si comme si j'import
const fs = require('fs').promises;
var router = express.Router();

//Instantiate server autrement je declare serveur de type express
var server = express();

//configure routes
server.get('/api/maps', function (req, res) {
    extractMaps('C:\\Program Files (x86)\\Steam\\steamapps\\common\\Counter-Strike Global Offensive\\csgo\\maps')
        .then((result) => res.status(200).send(result))
        .catch((result) => console.log(result));
});


//launch server 
server.listen(8080, ( )  =>  { 
  console.log ( 'Serveur démarré!' ) 
});

server.route('/api/maps').post((req, res) => {
  res.send(201, req.body)
});


//server.route('/api/maps').get((req, res) => {
 // console.log('je reçois qlq chose sur serveur.route');
//})



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


function receiveVote(){
    console.log("ceci est un test dasn recaveVote");
    // dasn le cas ou l'utilisateur a bien selectionner une carte
/*     if (this.selectedMap != null) {
        console.log('vous avez selectionner une carte');
        const existe =  false; // permet de d'identifier l'exstance d vote ou pas
  
        // pour voir si la carte existe dans la liste de vote ou pas
        if (this.voteListe) {
          for (const v of this.voteListe) {
            if (v.name === this.selectedMap) {
              this.existe = true;
            }
          }
        }
        // si la carte n'existe pas
        // je crée le vote
        // je l'ajoute dans la liste
        if (!this.existe) {
          console.log('le vote a etait ajouter ');
          const vote: VoteInterface = { name: this.selectedMap, nbVote: 1 };
          this.voteListe.push( vote ) ;
        } else {// j'incrémente le nombre de vote
          console.log('le nbvote a etait augmenter ');
        }
        console.log('la liste des vote est ' + this.voteListe);
      } */
}
