import {Actions, ActionTypes} from './actions';
import {State, initialState} from './state';


export function mainNavReducer(state = initialState , action: Actions): State {
  switch (action.type) {
    case ActionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language
      };
    default: {
      return state;
    }

  }

}
