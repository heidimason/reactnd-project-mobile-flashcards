import {
	getDecks,
	// getDeck,
	saveDeckTitle,
	addCardToDeck
} from '../utils/UdaciCardsAPI'

export const FETCH_DECKS = 'FETCH_DECKS'
// export const FETCH_DECK = 'FETCH_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export const fetchDecks = () =>
	dispatch => getDecks()
		.then( decks =>
			dispatch({
				type: FETCH_DECKS,
				decks
			})
		).catch( () =>
			alert('Error getting decks!')
		)

// export const fetchDeck = d => {
// 	return dispatch => {
// 		getDeck()
// 			.then( deck =>
// 				dispatch({
// 					type: FETCH_DECK,
// 					deck
// 				})
// 			).catch( () =>
// 				alert('Error getting deck!')
// 			)
// 	}
// }

export const addDeck = d =>
	dispatch => saveDeckTitle(d)
		.then( deck =>
			dispatch({
				type: ADD_DECK,
				deck
			})
		).catch( () =>
			alert('Error adding deck!')
		)

export const addCard = d =>
	dispatch => addCardToDeck(d)
		.then( card =>
			dispatch({
				type: ADD_CARD,
				card
			})
		).catch( () =>
			alert('Error adding card!')
		)
