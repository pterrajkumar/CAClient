import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//const BASE_URL = 'http://rajkumarpeter.southcentralus.cloudapp.azure.com:8080';
const BASE_URL = 'http://localhost:3000';

@Injectable()
export class FishesService {

  constructor(private http: Http) { }

  getFishes(currentIndex: number) {
    return this.http.get(`${BASE_URL}/api/fishes/${currentIndex}`);
  }

}
