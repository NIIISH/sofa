import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';


export function stepsReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.SET_STEPS_LOADING:
      return {
        ...state,
        isStepsLoading: action.payload
      };
    case ActionTypes.SET_PLACES_LOADING:
      return {
        ...state,
        isPlacesLoading: action.payload
      };


    case ActionTypes.GET_STEPS:
      return {
        ...state,
        isStepsLoading: true
      };
    case ActionTypes.GET_PLACES:
      return {
        ...state,
        isPlacesLoading: true
      };

    case ActionTypes.RECEIVED_STEPS:
      return {
        ...state,
        stepsData: action.payload,
        isStepsLoading: false
      };
    case ActionTypes.RECEIVED_ADDRESSES:
      return {
        ...state,
        stepsPlaces: action.payload,
        isPlacesLoading: false
      };

    case ActionTypes.ERROR_GET_STEPS:
      return {
        ...state,
        error: action.payload,
        isStepsLoading: false
      };
    case ActionTypes.ERROR_GET_PLACES:
      return {
        ...state,
        error: action.payload,
        isPlacesLoading: false
      };


    // case ActionTypes.LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload.error,
    //     isLoading: false
    //   };
    //   case ActionTypes.SET_LOADING:
    //   return {
    //     ...state,
    //     error: 'all work',
    //     isLoading: action.payload
    //   };
    default: {
      return state;
    }
  }
}
