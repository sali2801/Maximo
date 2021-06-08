import { Store as ReduxStore } from 'redux';

export enum ApplicationActionType {
  SetMockData = 'SET_MOCK_DATA',
}

export interface SetMockDataAction {
  type: ApplicationActionType.SetMockData;
  payload: {
    mockData: [];
  };
}

export interface State {
  data: [];
}
