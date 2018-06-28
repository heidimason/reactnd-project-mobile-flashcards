import { StyleSheet } from 'react-native'
import RF from 'react-native-responsive-fontsize'
import { gray } from '../utils/colors'

export const fonts = StyleSheet.create({
    h1: {
        fontSize: RF(5)
    },
    h2: {
        fontSize: RF(4),
        color: gray
    },
    h3: {
        fontSize: RF(3)
    }
})