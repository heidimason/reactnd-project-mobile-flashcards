import {
	FETCH_DECKS,
	ADD_DECK
} from '../actions'

const initialState = {
	decks: []
}

function decks(state = initialState, action) {
	const { decks, deck } = action

	switch (action.type) {
		case FETCH_DECKS:
			return Object.keys(decks).map(k => decks[k])
		case ADD_DECK:
			return [
				...state,
				deck
			]
  		default:
			return state
	}
}

export default decks
