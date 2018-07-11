import { AsyncStorage } from 'react-native'
import { starterData } from '../mock/decks'

const DECKS_STORAGE_KEY = 'UdaciCards:decks'

const setStarterData = () => {
	AsyncStorage.setItem( DECKS_STORAGE_KEY, JSON.stringify(starterData) )

	return starterData
}

const formatDecks = res => {
	return res === null ? JSON.parse(res) : setStarterData()
}

export const getDecks = () =>
	// AsyncStorage.clear()

	AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then(formatDecks)
