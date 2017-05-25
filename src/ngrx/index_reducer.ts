import { createSelector } from "reselect"
import { ActionReducer } from "@ngrx/store"
import { compose } from "@ngrx/core/compose"
import { combineReducers } from "@ngrx/store"
import * as fromReducer from "./reducer"

export interface State {
  index: fromReducer.State

}

export const reducers = {
  index: fromReducer.reducer
}

const productionReducer: ActionReducer<State> = combineReducers(reducers)

export function reducer(state: any, action: any) {
  return productionReducer(state, action)
}

export const getReducerState = (state: State) => state.index
export const getReducerCards = createSelector(getReducerState, fromReducer.getCards)
