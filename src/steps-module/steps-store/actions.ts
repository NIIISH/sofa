import { Action } from '@ngrx/store';
import {Steps} from '../models/steps.model';
import {Place} from '../models/place.model';


export enum ActionTypes {
  SET_STEPS_LOADING = '[Steps] Set steps loading',
  SET_PLACES_LOADING = '[Steps] Set places loading',

  GET_STEPS = '[Steps] Get steps',
  GET_PLACES = '[Steps] Get places',
  RECEIVED_STEPS = '[Steps] Received steps',
  RECEIVED_PLACES = '[Steps] Received places',
  RECEIVED_ADDRESSES = '[Steps] Received addresses',

  ERROR_GET_STEPS = '[Steps] Error get steps',
  ERROR_GET_PLACES = '[Steps] Error get places',

  CHANGE_LANGUAGE = '[Steps] Change language',
  CHANGE_CURR_STEP = '[Steps] Change curr step',
}
export class SetStepsLoadingAction implements Action {
  readonly type = ActionTypes.SET_STEPS_LOADING;
  constructor(public payload: boolean) {}
}
export class SetPlacesLoadingAction implements Action {
  readonly type = ActionTypes.SET_PLACES_LOADING;
  constructor(public payload: boolean) {}
}

export class GetStepsAction implements Action {
  readonly type = ActionTypes.GET_STEPS;
  constructor(public payload: { language: string }) {}
}
export class GetPlacesAction implements Action {
  readonly type = ActionTypes.GET_PLACES;
  constructor(
      public payload:
       {
         language: string,
         currStep: number,
         currLocation:
              {
                lat: number,
                lon: number,
              },
         radius: number
       }) {}
}
export class ReceivedStepsAction implements Action {
  readonly type = ActionTypes.RECEIVED_STEPS;
  constructor(public payload: Steps ) {}
}
export class ReceivedPlacesAction implements Action {
  readonly type = ActionTypes.RECEIVED_PLACES;
  constructor(public payload: Place[]) {}
}

export class ReceivedAddressesAction implements Action {
  readonly type = ActionTypes.RECEIVED_ADDRESSES;
  constructor(public payload: Place[]) {}
}

export class ErrorGetStepsAction implements Action {
  readonly type = ActionTypes.ERROR_GET_STEPS;
  constructor(public payload: string ) {}
}
export class ErrorGetPlacesAction implements Action {
  readonly type = ActionTypes.ERROR_GET_PLACES;
  constructor(public payload: string) {}
}

export type Actions =
  SetStepsLoadingAction |
  SetPlacesLoadingAction |
  GetStepsAction |
  GetPlacesAction |
  ReceivedStepsAction |
  ReceivedPlacesAction |
  ReceivedAddressesAction |
  ErrorGetPlacesAction |
  ErrorGetStepsAction;
