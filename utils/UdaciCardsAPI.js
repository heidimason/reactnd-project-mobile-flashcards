import { AsyncStorage } from 'react-native'
import { starterData } from '../mock/decks'

const DECKS_STORAGE_KEY = 'UdaciCards:decks'

const setStarterData = () => {
	AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(
		starterData
	))

	return starterData
}

const formatDecks = res => {
	return res === null
		? setStarterData()
		: JSON.parse(res)
}

export const getDecks = () =>
	// AsyncStorage.clear()

	AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then(formatDecks)

	// AsyncStorage.getItem(DECKS_STORAGE_KEY)
	// 	.then( res => JSON.parse(res) )

// export const getDeck = id =>
// 	AsyncStorage.getItem(DECKS_STORAGE_KEY)
// 		.then(res => {
// 			let decks = JSON.parse(res)

// 			return decks[id]
// 		})

export const saveDeckTitle = title =>
	AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(
    	title
  	))

export const addCardToDeck = ({ title, card }) => {
	AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
		[title]: card
	}))
}


