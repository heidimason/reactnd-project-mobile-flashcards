import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import DeckTitle from './DeckTitle'

class ListDecks extends Component {
    render() {
        return (
            <View>
                <HeaderText
                    style={fonts.h3}>DECKS
                </HeaderText>

                <CenterView>
                    <DeckTitle />
                </CenterView>
            </View>
        )
    }
}

const HeaderText = styled.Text`
        padding-top: 10%;
        padding-left: 10%;
    `,
    CenterView = styled.View`
        align-items: center;
    `

export default ListDecks
