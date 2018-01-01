import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AddDataPage } from '../add-data/add-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Page({
  templateUrl: 'build/pages/add-data/add-data.html'
})
export class HomePage {

  addPage = AddDataPage;

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
