import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {Observable, of as observableOf, throwError} from 'rxjs';
import {catchError, filter, map, switchMap, timeout, timeoutWith} from 'rxjs/operators';
import { DataService } from '../services/data.service';
import * as featureActions from './actions';
import {Router} from '@angular/router';
import {MAP_API_KEY} from '../../config';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class StepsStoreEffects {
  constructor(
    private dataService: DataService,
    private actions$: Actions,
    private router: Router,
    private snackBar: MatSnackBar) {}
  @Effect()
  getStepsRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.GetStepsAction>(
      featureActions.ActionTypes.GET_STEPS
    ),
    switchMap(action =>
      this.dataService
        .getSteps(action.payload.language)
        .pipe(
          timeout(15000),
          map(
            steps => {
              return new featureActions.ReceivedStepsAction(steps);
            }
          ),
          catchError(error => {
              this.snackBar.open('Check your internet connection', '', {
                duration: 500,
                panelClass: 'sofaSnackBar',
                verticalPosition: 'top',
              });
              this.router.navigate(['/root/']);
              return observableOf(new featureActions.ErrorGetStepsAction(error));
            }
          )
        )
    )
  );

  @Effect()
  getPlacesRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.GetPlacesAction>(
      featureActions.ActionTypes.GET_PLACES
    ),
    switchMap(action =>
      this.dataService
        .getAllPlaces(action.payload.language, action.payload.currStep, action.payload.currLocation, action.payload.radius)
        .pipe(
          map(places => new featureActions.ReceivedPlacesAction(places)),
          catchError(error => {
            this.snackBar.open('Check your internet connection', '', {
              duration: 500,
              panelClass: 'sofaSnackBar',
              verticalPosition: 'top',
            });
            this.router.navigate(['/root/']);
            return observableOf(new featureActions.ErrorGetPlacesAction(error));
            }
          )
        )
    )
  );

@Effect()
getAddressesRequestEffect$: Observable<Action> = this.actions$.pipe(
  ofType<featureActions.ReceivedPlacesAction>(
    featureActions.ActionTypes.RECEIVED_PLACES
  ),
    switchMap(action =>
      this.dataService
        .getAddress(action.payload, MAP_API_KEY)
        .pipe(
          filter(data => data[data.length - 1].results[0].formatted_address !== null),
          timeoutWith(15000, throwError(new Error('API ERROR'))),
          map(
            data => {
              action.payload.map( (place) => {
                place.address = data[action.payload.indexOf(place)].results[0].formatted_address;
              });
              return new featureActions.ReceivedAddressesAction(action.payload);
            }
          ),
          catchError(error => {
            this.snackBar.open('api_error', '', {
              duration: 500,
              panelClass: 'sofaSnackBar',
              verticalPosition: 'top',
            });
            this.router.navigate(['/root/']);
            return observableOf(new featureActions.ErrorGetPlacesAction(error));
            }
          )
        )
    )
  );

}
