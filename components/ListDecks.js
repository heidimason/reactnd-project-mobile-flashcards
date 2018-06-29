import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import DeckTitle from './DeckTitle'

class ListDecks extends Component {
    render() {
        return (
            <ContainerView>
                <HeaderText
                    style={fonts.h3}>DECKS
                </HeaderText>

                <CenterView>
                    <DeckTitle />
                </CenterView>
            </ContainerView>
        )
    }
}

const ContainerView = styled.View`
        background-color: white;
        height: 100%;
    `,
    HeaderText = styled.Text`
        padding-top: 10%;
        padding-left: 10%;
    `,
    CenterView = styled.View`
        align-items: center;
    `

export default ListDecks
