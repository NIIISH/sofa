import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {
  StepsStoreSelectors
} from '../../steps-module/steps-store';


export const selectError: MemoizedSelector<object, string> = createSelector(

  StepsStoreSelectors.selectStepsError,
  (stepsError: string) => {
    return stepsError; // || myOtherFeature;
  }
);
export const selectIsLoading: MemoizedSelector<
  object,
  boolean
  > = createSelector(
  StepsStoreSelectors.selectStepsIsLoading,
  (steps: boolean) => {
    return steps; // || myOtherFeature;
  }
);
