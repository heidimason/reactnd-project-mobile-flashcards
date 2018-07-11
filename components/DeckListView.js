import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import { colors } from '../utils/colors'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'

const DeckListItem = ({ title, questions }) => {
    return (
        <CenterView>
            <DeckTitleText
                style={fonts.h1}>{title}
            </DeckTitleText>

            { questions.length !== 1 ?
                <NumCardsText
                    style={fonts.h2}>{questions.length} cards
                </NumCardsText>
                :
                <NumCardsText
                    style={fonts.h2}>{questions.length} card
                </NumCardsText>
            }
        </CenterView>
    )
}

class DeckListView extends Component {
    componentDidMount () {
        this.props.fetchAllDecks()
    }

    renderItem = ({ item }) => {
        return <DeckListItem {...item} />
    }

    render() {
        const { decks } = this.props

        return (
            <View>
                { decks !== undefined ?
                    <FlatList
                        data={decks}
                        renderItem={this.renderItem}
                        keyExtractor={
                            (item, index) => index.toString()
                        }
                    />
                    :
                    <NoDecksText
                        style={fonts.h2}>You have not added any decks
                    </NoDecksText>
                }
            </View>
        )
    }
}

const CenterView = styled.View`
        align-items: center;
        border-bottom-color: gray;
        border-bottom-width: 2;
        margin-right: 5%;
        margin-left: 5%;
    `,
    NoDecksText = styled.Text`
        margin-top: 15%;
        text-align: center;
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

const mapStateToProps = decks => {
    return {
        decks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDecks: () => dispatch( fetchDecks() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView)
