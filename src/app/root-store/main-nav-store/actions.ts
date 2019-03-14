import { Action } from '@ngrx/store';

export enum ActionTypes {
  SET_LANGUAGE = '[Root] Set language'
}

export class SetLanguage implements Action {
  readonly type = ActionTypes.SET_LANGUAGE;
  constructor(public payload: {language: string}) {}
}

export type Actions =
  SetLanguage;
