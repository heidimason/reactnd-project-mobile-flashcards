import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'

class DeckTitle extends Component {
    render() {
        return (
            <View>
                <DeckTitleText
                    style={fonts.h1}>Deck Title
                </DeckTitleText>

                <NumCardsText
                    style={fonts.h2}>Number of cards
                </NumCardsText>
            </View>
        )
    }
}

const DeckTitleText = styled.Text`
        font-weight: bold;
        margin-top: 10%;
        text-align: center;
    `,
    NumCardsText = styled.Text`
        margin-top: 1%;
    `

export default DeckTitle
