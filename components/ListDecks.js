import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import { colors } from '../utils/colors'
import getDecks from '../mock/decks'

function DeckText ({ title, numCards }) {
    return (
        <CenterView>
            <DeckTitleText
                style={fonts.h1}>{title}
            </DeckTitleText>

            <NumCardsText
                style={fonts.h2}>{numCards} cards
            </NumCardsText>
        </CenterView>
    )
}

class ListDecks extends Component {
    renderItem = ({ item }) => {
        return <DeckText {...item} />
    }

    render() {
        const decks = getDecks()

        return (
            <ContainerView>
                <HeaderText
                    style={fonts.h3}>DECKS
                </HeaderText>

                <FlatList
                    data={decks}
                    renderItem={this.renderItem}
                    keyExtractor={
                        (item, index) => index.toString()
                    }
                />
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
        border-bottom-color: gray;
        border-bottom-width: 1;
        margin-right: 5%;
        margin-left: 5%;
    `,
    DeckTitleText = styled.Text`
        font-weight: bold;
        margin-top: 15%;
        text-align: center;
    `,
    NumCardsText = styled.Text`
        margin-top: 1%;
        margin-bottom: 15%;
    `

export default ListDecks
