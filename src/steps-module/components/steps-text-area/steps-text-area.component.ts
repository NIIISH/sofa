import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Step} from '../../models/steps.model';
import {Place} from '../../models/place.model';

@Component({
  selector: 'app-steps-text-area',
  templateUrl: './steps-text-area.component.html',
  styleUrls: ['./steps-text-area.component.scss']
})
export class StepsTextAreaComponent implements OnInit {

  @Input() step: Step;
  @Input() places: Place[];
  @Input() placesLoading: boolean;
  @Output() position = new EventEmitter<{lat: number, lon: number}>();

  colors = [
    '#E81111',
    '#0FB91A',
    '#F1C40F',
    '#9D156B',
    '#1B4BBD',
    '#E61389',
    '#E67E22',
    '#48749F',
    '#9B59B6'
  ];

  constructor() {}

  ngOnInit() {

  }

  redirectToWebSite(place: Place) {
    const temp = place.url.split('www.');
    const url = 'http://' + temp[1];
    window
      .open(url);
  }

  setPosition(place: Place) {
    this.position.emit({lat: place.latitude, lon: place.longitude});
  }

}
