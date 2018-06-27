import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import RF from 'react-native-responsive-fontsize'
import { gray } from '../utils/colors'

class ListDecks extends Component {
    render() {
        return (
            <CenterView>
                <DeckTitleText
                    style={styles.h1}>Deck Title
                </DeckTitleText>

                <NumCardsText
                    style={{fontSize: RF(4), color: gray}}>Number of cards
                </NumCardsText>
            </CenterView>
        )
    }
}

const CenterView = styled.View`
        align-items: center;
    `,
    DeckTitleText = styled.Text`
        font-weight: bold;
        margin-top: 10%;
    `,
    NumCardsText = styled.Text`
        color: #777;
        margin-top: 1%;
    `

const styles = StyleSheet.create({
    h1: {
        fontSize: RF(5)
    }
})

export default ListDecks
