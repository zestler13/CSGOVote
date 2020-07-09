import { Component, OnInit, Input } from '@angular/core';
import { VoteInterface } from '../../../../backend/voteInterface';
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
   console.log('ceci est envoie de vote' + this.mapService.sendVote(this.selectedMap));
    // ensuite
    this.selectedMap = null;
  }


}
