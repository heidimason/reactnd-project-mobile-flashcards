import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import RF from 'react-native-responsive-fontsize'
import ListDecks from './components/ListDecks'

class FlashcardsApp extends Component {
    render() {
        return (
            <ContainerView>
                <DecksText style={styles.h3}>DECKS</DecksText>

                <ListDecks />
            </ContainerView>
        )
    }
}

const ContainerView = styled.View`
        flex: 1;
    `,
    DecksText = styled.Text`
        margin-left: 20%;
        margin-top: 20%;
    `

const styles = StyleSheet.create({
    h3: {
        fontSize: RF(3)
    }
})

export default FlashcardsApp

