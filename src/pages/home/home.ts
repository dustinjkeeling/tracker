import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	locations: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {

  	this.getLocations();

  }

  getLocations() {

  	this.restProvider.getData()
  	.then(data => {
  		this.locations = data;
  		console.log(this.locations);
  	});
  }

}
