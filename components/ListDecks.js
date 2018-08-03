import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ContainerView, HeaderText } from '../utils/styles'
import { fonts } from '../utils/styles/fonts'
import DeckListView from './DeckListView'

class ListDecks extends Component {
    render() {
        return (
            <ContainerView style={styles.container}>
                <HeaderText
                    style={[fonts.h3, styles.header]}>DECKS
                </HeaderText>

                <DeckListView />
            </ContainerView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    header: {
        paddingLeft: '10%'
    }
})

export default ListDecks
