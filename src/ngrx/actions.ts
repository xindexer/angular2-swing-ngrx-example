import { Action } from "@ngrx/store"
import { type } from "../util"

export const ActionTypes = {
  GET_CARDS:                type("[Cards] Get Cards"),
  GET_CARDS_SUCCESS:        type("[Cards] Get Cards Success"),
  ADD_CARD:                 type("[Cards] Logout"),
  REMOVE_CARD:              type("[Cards] Logout Success"),
}

export class GetCards implements Action {
  type = ActionTypes.GET_CARDS

  constructor( ) { }
}

export class GetCardsSuccess implements Action {
  type = ActionTypes.GET_CARDS_SUCCESS

  constructor( ) { }
}

export class AddCard implements Action {
  type = ActionTypes.ADD_CARD

  constructor( ) { }
}

export class RemoveCard implements Action {
  type = ActionTypes.REMOVE_CARD

  constructor( ) { }
}

export type Actions =
  GetCards |
  GetCardsSuccess |
  AddCard |
  RemoveCard
