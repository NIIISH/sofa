import {Component, Input, NgZone, OnInit} from '@angular/core';
import {Place} from '../../models/place.model';
import {MatSnackBar} from '@angular/material';

declare var google: any;

@Component({
  selector: 'app-steps-maps',
  templateUrl: './steps-maps.component.html',
  styleUrls: ['./steps-maps.component.scss']
})

export class StepsMapsComponent implements OnInit {

  @Input() step: number;
  @Input() set _basePosition(position: { lat: number, lon: number, }) {
    this.basePosition = {...position};
    this.zoom = 12.5;
    if (this.map) {
      this.map.setCenter({lat: this.basePosition.lat, lng: this.basePosition.lon});
      this.places.map((place) => {
        if (position.lat === place.latitude && position.lon === place.longitude) {
          place.isOpen = true;
        }
      });
    }
  }
  @Input() places: Place[];
  @Input() placesLoading: boolean;
  zoom;
  basePosition = {
    lat: 32.933052,
    lon: 35.082678,
  };
  map;
  personPosition;
  userLocMarkerIsOpen = true;

  constructor(private snackBar: MatSnackBar) {
    this.getUserLocation();
  }

  styles = [
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f7f1df'
        }
      ]
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [
        {
          color: '#d0e3b4'
        }
      ]
    },
    {
      featureType: 'landscape.natural.terrain',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'poi.medical',
      elementType: 'geometry',
      stylers: [
        {
          color: '#fbd3da'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#bde6ab'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffe15f'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#efd151'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: 'black'
        }
      ]
    },
    {
      featureType: 'transit.station.airport',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#cfb2db'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#a2daf2'
        }
      ]
    }
  ];
  icons = [
    {
     url: './assets/mapIcons/mk_step_01.png',
     scaledSize: {
          width: 20,
          height: 30
      }
    },
    {
      url: './assets/mapIcons/mk_step_02.png',
      scaledSize: {
        width: 20,
        height: 30
      }
    },
    {
      url: './assets/mapIcons/mk_step_03.png',
      scaledSize: {
        width: 20,
        height: 30
      }
    },
    {
      url: './assets/mapIcons/mk_step_04.png',
      scaledSize: {
        width: 20,
        height: 30
      }
    },
    {
      url: './assets/mapIcons/mk_step_05.png',
      scaledSize: {
        width: 20,
        height: 30
      }
    },
    {
      url: './assets/mapIcons/mk_step_06.png',
      scaledSize: {
        width: 20,
        height: 30
      }
    },
    {
      url: './assets/mapIcons/mk_step_07.png',
      scaledSize: {
        width: 20,
        height: 30
      }
    },
    {
      url: './assets/mapIcons/mk_step_08.png',
      scaledSize: {
        width: 20,
        height: 30
      }
    },
    {
      url: './assets/mapIcons/mk_step_09.png',
      scaledSize: {
        width: 20,
        height: 30
      }
    },
  ];

  userPositionMarker = {
    url: './assets/mapIcons/ic_my_location.png',
    scaledSize: {
      width: 20,
      height: 20
    }
  };



  ngOnInit() {
  }

  getUserLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.basePosition = {
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        };
        this.personPosition = {
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        };
        this.zoom = 12;
      }, () => {
        this.snackBar.open('Not support for geolocation', '', {
          duration: 200,
          panelClass: 'sofaSnackBar',
        });
        this.basePosition = {
          lat: 32.933052,
          lon: 35.082678,
        };
        this.personPosition = {
          lat: 32.933052,
          lon: 35.082678,
        };
        this.zoom = 12;
      } );
    }

  redirectToNavigate(place: Place) {
    window
      .open(
        `http://maps.google.com/maps?saddr=${this.personPosition.lat},
        ${this.personPosition.lon}&daddr=${place.latitude},${place.longitude}`, '_blank');
  }

  redirectToWebSite(place: Place) {
    const temp = place.url.split('www.');
    const url = 'http://' + temp[1];
    window
      .open(url);
  }

  setLocationButton(map) {
    this.map = map;
    document.getElementById('locationButton')
      .addEventListener('click',
        () => { this.getUserLocation();
                map.setCenter({lat: this.basePosition.lat, lng: this.basePosition.lon});
                this.userLocMarkerIsOpen = true;
      });
    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(document.getElementById('locationButton'));
  }



}
