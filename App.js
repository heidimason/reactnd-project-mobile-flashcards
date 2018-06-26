import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import RF from 'react-native-responsive-fontsize'

export default class App extends React.Component {
    render() {
        return (
            <ContainerView>
                <DecksText style={styles.h3}>DECKS</DecksText>

                <CenterView>
                    <DeckTitleText style={styles.h1}>Deck Title</DeckTitleText>
                    <NumCardsText style={styles.h2}>Number of cards</NumCardsText>
                </CenterView>
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
    `,
    CenterView = styled.View`
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
    },
    h2: {
        fontSize: RF(4)
    },
    h3: {
        fontSize: RF(3)
    }
})

