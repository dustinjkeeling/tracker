import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the AddDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-data',
  templateUrl: 'add-data.html',
})
export class AddDataPage {

	data = { deviceId: '', batLev: '', latitude: '', longitude: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {

  	saveData() {
  		this.restapiService.saveData(this.data).then((result) => {
  			console.log(result);
  		}, (err) => {
  			console.log(err);
  		});
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDataPage');
  }

}
