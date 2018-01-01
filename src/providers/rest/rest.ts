import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

	apiUrl = 'http://45.77.140.66:3000';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getData() {

  	return new Promise(resolve => {
  		this.http.get(this.apiUrl+'/location').subscribe(data => {
  			resolve(data);
  		}, err => {
  			console.log(err);
  		});
  	});
  }

  addData(data) {
  	return new Promise((resolve, reject) => {
  		this.http.post(this.apiUrl+'/location', JSON.stringify(data))
  		.subscribe(res => {
  			resolve(res);
  		}, (err) => {
  			reject(err);
  		});
  	});
  }

}
