import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import RF from 'react-native-responsive-fontsize'
import { gray, white, black } from '../utils/colors'
import SubmitBtn from './SubmitBtn'
import SubmitBtnTransparent from './SubmitBtnTransparent'

class ViewDeck extends Component {
    render() {
        return (
            <View>
                <HeaderText
                    style={styles.h3}>Deck Title
                </HeaderText>

                <CenterView>
                    <DeckTitleText
                        style={styles.h1}>Deck Title
                    </DeckTitleText>

                    <NumCardsText
                        style={styles.h2}>Number of cards
                    </NumCardsText>

                    <SubmitBtnTransparent>Add Card</SubmitBtnTransparent>
                    <SubmitBtn
                        style={{backgroundColor: black, marginTop: '3%'}}>Start Quiz
                    </SubmitBtn>
                </CenterView>
            </View>
        )
    }
}

const HeaderText = styled.Text`
        background-color: black;
        color: white;
        font-weight: bold;
        padding: 5% 10%;
        width: 100%;
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

export default ViewDeck
