import { StepsStoreState } from '../../steps-module/steps-store';
import {MainNavStoreState} from './main-nav-store';

export interface RootState {
  steps: StepsStoreState.State;
  mainNav: MainNavStoreState.State;
}
