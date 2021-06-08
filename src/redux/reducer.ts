import { BaseAction } from './actions';
import { ApplicationActionType, State } from './types';

export const initialState: State = {
  data: [],
};

export const ApplicationReducer = (
  state: State = initialState,
  action: BaseAction
) => {
  switch (action.type) {
    case ApplicationActionType.SetMockData: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
