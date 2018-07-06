import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'UdaciCards:decks'

export const getDecks = () => {
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then(res => {
			return JSON.parse(res)
		})
}
