import { Component, OnInit, Input } from '@angular/core';
import { VoteInterface } from './voteInterface';
import { MapInterface } from '../MapInterface';
import { MapService } from '../map.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  selectedMap: string;
  maps: MapInterface[];
  voteListe: VoteInterface[] = [];
  existe: boolean;

  constructor(
    private mapService: MapService,
  ) { }


  ngOnInit(): void {
    this.getMaps();
  }


  getMaps(): void {
    this.mapService.getMaps()
      .subscribe(listeMaps => {
        this.maps = listeMaps;
      });
  }


  onSelect(map: string): void {
    this.selectedMap = map;
  }

  // doit  envoyer le vote
  save(): void {
      // envoie le vote

    // dasn le cas ou l'utilisateur a bien selectionner une carte
    if (this.selectedMap != null) {
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
    }
  }


}
