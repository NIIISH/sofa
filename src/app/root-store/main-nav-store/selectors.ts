import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {State} from './state';

const getLanguage = (state: State): string => state.language;

export const selectMainNavState: MemoizedSelector<
  object,
  State
  > = createFeatureSelector<State>('main-nav');

export const selectNavLanguage: MemoizedSelector<
  object,
  string
  > = createSelector(selectMainNavState, getLanguage);
