import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import RF from 'react-native-responsive-fontsize'
import { gray } from '../utils/colors'

class ListDecks extends Component {
    render() {
        return (
            <View>
                <HeaderText
                    style={styles.h3}>DECKS
                </HeaderText>

                <CenterView>
                    <DeckTitleText
                        style={styles.h1}>Deck Title
                    </DeckTitleText>

                    <NumCardsText
                        style={styles.h2}>Number of cards
                    </NumCardsText>
                </CenterView>
            </View>
        )
    }
}

const HeaderText = styled.Text`
        margin-top: 10%;
        margin-left: 10%;
    `,
    CenterView = styled.View`
        align-items: center;
    `,
    DeckTitleText = styled.Text`
        font-weight: bold;
        margin-top: 10%;
    `,
    NumCardsText = styled.Text`
        margin-top: 1%;
    `

const styles = StyleSheet.create({
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

export default ListDecks
