import {
	FETCH_DECKS
} from '../actions'

function decks(state = [], action) {
	switch (action.type) {
		case FETCH_DECKS:
			return action.decks
  		default:
			return state
	}
}

export default decks
