import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Steps} from '../models/steps.model';
import {Place} from '../models/place.model';
import {AddressResponce} from '../models/address.responce.model';
import {forkJoin} from 'rxjs';
import {STEPS_URL} from '../../config';

@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit {

  baseLang;
  basePosition = {
    lat: 32.933052,
    lon: 35.082678,
  };

  baseUrl = STEPS_URL;

  constructor(private httpClient: HttpClient) {
    this.getUserLang();
    this.getUserLocation();
  }

  ngOnInit(): void {

  }

  getSteps(language: string) {
    return this.httpClient.get<Steps>(this.baseUrl + language);
  }

  getAllPlaces(language: string, currStep: number, currLocation: { lat: number, lon: number }, radius: number) {
    return this.httpClient.get<Place[]>
    (this.baseUrl + 'step/'
      + language + '/' + (currStep + 1)
      + '/area/' + currLocation.lat + '/' + currLocation.lon + '/' + radius );
  }

// dont support
  // getCategory() {
  //   return this.httpClient.get<string[]>(this.baseUrl + this.baseLang + '/category');
  // }
  //
  // getCity() {
  //   return this.httpClient.get<City[]>(this.baseUrl + this.baseLang + '/city');
  // }

  getAddress(places: Place[], key: string) {
    const temp = [];
    places.map( place => {
      temp.push(
        this.httpClient.get<AddressResponce>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${place.latitude},
        ${place.longitude}&key=${key}`));
    });
    return forkJoin(temp);
  }

  private getUserLang() {
    switch (navigator.language) {
      case 'ru':
        this.baseLang = '/ru';
        break;
      case 'en':
        this.baseLang = '/en';
        break;
      case 'he':
        this.baseLang = '/he';
        break;
      case 'fr':
        this.baseLang = '/fr';
        break;
      default:
        this.baseLang = '/en';
        break;
    }
  }

  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.basePosition = {
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        };
      });
    } else {
      console.log('No support for geolocation');
      this.basePosition = {
        lat: 32.933052,
        lon: 35.082678,
      };
    }
  }

}
