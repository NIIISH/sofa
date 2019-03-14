import {Step, Steps} from '../models/steps.model';
import {Place} from '../models/place.model';

export interface State {
  // user: User | null;
  isStepsLoading: boolean;
  isPlacesLoading: boolean;
  stepsData: Steps;
  stepsPlaces: Place[];
  error: string;
}
export const initialState: State = {
  // user: null,
  isStepsLoading: false,
  isPlacesLoading: false,
  stepsData: null,
  stepsPlaces: null,
  error: null

};
