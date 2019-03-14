import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';

import {Store} from '@ngrx/store';
import {RootStoreState,
        StepsStoreSelectors,
        StepsStoreActions,
        MainNavStoreSelectors,
        } from '../../app/root-store';
import {Steps} from '../models/steps.model';
import {Place} from '../models/place.model';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-steps-container-component',
  templateUrl: './steps.container.component.html',
  styleUrls: ['./steps.container.component.scss']
})
export class StepsContainerComponent implements OnInit, OnDestroy {

  // error$: Observable<string>;
  isStepsLoading$: Observable<boolean>;
  isPlacesLoading$: Observable<boolean>;
  steps$: Observable<Steps>;
  places$: Observable<Place[]>;
  language$: string;

  subscriptions: Subscription = new Subscription();

  currStep = 0;
  currLocation = {
    lat: 32.933052,
    lon: 35.082678,
  };
  radius = 1000;

  constructor(
    private dataService: DataService, private breakpointObserver: BreakpointObserver, private store$: Store<RootStoreState.RootState> ) {}


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  placePosition: {lat: number, lon: number};

  ngOnInit() {
    this.store$.dispatch(new StepsStoreActions.SetStepsLoadingAction(true));
    this.subscriptions.add(this.store$.select(MainNavStoreSelectors.selectNavLanguage)
      .pipe(filter(lang => lang !== null), distinctUntilChanged())
      .subscribe(currLang => {
        this.language$ = currLang;
        this.store$.dispatch(new StepsStoreActions.GetStepsAction({language: currLang}));
        this.store$.dispatch(new StepsStoreActions.GetPlacesAction(
          {language: currLang,
            currStep: this.currStep,
            currLocation: this.currLocation,
            radius: this.radius}));
      }));

    this.isStepsLoading$ = this.store$.select(StepsStoreSelectors.selectStepsIsLoading);
    this.isPlacesLoading$ = this.store$.select(StepsStoreSelectors.selectPlacesIsLoading);
    this.steps$ = this.store$.select(StepsStoreSelectors.selectSteps);
    this.places$ = this.store$.select(StepsStoreSelectors.selectPlaces);
    // this.error$ = this.store$.select(StepsStoreSelectors.selectStepsError);
  }


  setCurrStep(step: number) {
    this.currStep = step;
    this.store$.dispatch(new StepsStoreActions.GetPlacesAction(
      {
        language: this.language$,
        currStep: this.currStep,
        currLocation: this.currLocation,
        radius: this.radius}));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setPosition(event: { lat: number; lon: number }) {
    this.placePosition = {...event};
  }
}
