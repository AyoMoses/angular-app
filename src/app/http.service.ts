import { Injectable } from '@angular/core';
//WE IMPORT HTTP CLIENT IN AGULAR IN ORDER TO HAVE ACCESS TO PUBLIC API
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // THIS SUPER SIMPLE HTTP SERVICE CAN BE LIKE A SERVICE THAT FETCHES DATA FROM AN API AND WE DISPLAY IN COMPONENTS WE NEED IT
  getBeer() {
    return this.beerHttp.get('https://api.openbrewerydb.org/breweries');
  }
  constructor(private beerHttp: HttpClient) { }
}
