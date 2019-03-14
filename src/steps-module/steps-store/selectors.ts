import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { State } from './state';
import {Steps} from '../models/steps.model';
import {Place} from '../models/place.model';

const getError = (state: State): any => state.error;
const getIsStepsLoading = (state: State): boolean => state.isStepsLoading;
const getIsPlacesLoading = (state: State): boolean => state.isPlacesLoading;
const getSteps = (state: State): Steps => state.stepsData;
const getPlaces = (state: State): Place[] => state.stepsPlaces;

export const selectStepsState: MemoizedSelector<
  object,
  State
  > = createFeatureSelector<State>('steps');


export const selectStepsError: MemoizedSelector<object, any> = createSelector(
  selectStepsState,
  getError
);

export const selectStepsIsLoading: MemoizedSelector<
  object,
  boolean
  > = createSelector(selectStepsState, getIsStepsLoading);

export const selectPlacesIsLoading: MemoizedSelector<
  object,
  boolean
  > = createSelector(selectStepsState, getIsPlacesLoading);

export const selectSteps: MemoizedSelector<
  object,
  Steps
  > = createSelector(selectStepsState, getSteps);

export const selectPlaces: MemoizedSelector<
  object,
  Place[]
  > = createSelector(selectStepsState, getPlaces);


