import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

	//types: string [] = ["Communication", "Probe", "Space Station", "Telescope", "Space Debris", "Positioning"];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }

	groupByTypes(satellitesArray: Satellite[]) {
		let types : string [] = [];
		for (let i: number = 0; i < satellitesArray.length; i++) {
			if (!types.includes(satellitesArray[i].type)) {
				types.push(satellitesArray[i].type)
			}
		}
		return types;
	}

}