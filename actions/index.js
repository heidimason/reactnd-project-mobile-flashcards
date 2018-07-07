import {
	getDecks,
	saveDeckTitle
} from '../utils/UdaciCardsAPI'

export const FETCH_DECKS = 'FETCH_DECKS'
export const ADD_DECK = 'ADD_DECK'

export const fetchDecks = () => {
	return dispatch => {
		getDecks()
			.then( decks =>
				dispatch({
					type: FETCH_DECKS,
					decks
				})
			).catch( () =>
				alert('Error getting decks!')
			)
	}
}

export const addDeck = d => {
	return dispatch => {
		saveDeckTitle(d)
			.then( deck =>
				dispatch({
					type: ADD_DECK,
					deck
				})
			).catch( () =>
				alert('Error adding deck!')
			)
	}
}