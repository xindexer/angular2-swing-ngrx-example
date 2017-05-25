import * as actions from "./actions"
import * as _ from "lodash"

export interface State {
  cards: any[]
}

export const initialState: State = {
  cards : []
}

export function reducer(state = initialState, action: actions.Actions): State {
  switch(action.type) {
    case actions.ActionTypes.GET_CARDS: {
      let cardList: any[] = []
      for(let i = 0; i < 4; i++)
        cardList.push(cards[_.random(0,3)])
      return Object.assign({}, state, { cards: cardList })
    }
    case actions.ActionTypes.ADD_CARD: {
      return Object.assign({}, state, {
        cards: _.concat(state.cards,cards[_.random(0,3)])
      })
    }
    case actions.ActionTypes.REMOVE_CARD: {
      return Object.assign({}, state, { cards:_.slice(state.cards,1) })
    }
    default: {
      return state
    }
  }
}

export const cards: any[] = [
  { name: 'clubs', symbol: '♣', id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) },
  { name: 'diamonds', symbol: '♦', id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) },
  { name: 'spades', symbol: '♠', id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) },
  { name: 'hearts', symbol: '❤︎', id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) }
]

export const getCards = (state: State) => state.cards
