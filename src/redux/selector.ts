import { State } from './types';
import { createSelector } from 'reselect';

export const selectData = (state: State) => state.data;

export const selectMockData = createSelector(selectData, (data) => data);
