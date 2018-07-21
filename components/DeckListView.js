import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import { colors } from '../utils/colors'
import { text } from '../utils/text'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'

const DeckListItem = ({ title, questions }) => {
    return (
        <CenterView>
            <DeckTitleText
                style={[fonts.h1, text.deckTitle]}>{title}
            </DeckTitleText>

            { questions && questions.length !== 1 &&
                <NumCardsText
                    style={[fonts.h2, text.numCards]}>{questions.length} cards
                </NumCardsText>
            }

            { questions && questions.length === 1 &&
                <NumCardsText
                    style={[fonts.h2, text.numCards]}>{questions.length} card
                </NumCardsText>
            }
        </CenterView>
    )
}

class DeckListView extends Component {
    componentDidMount () {
        this.props.fetchAllDecks()
    }

    renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DeckView', item)
        }>
            <DeckListItem {...item} />
        </TouchableOpacity>
    )

    render() {
        const { decks } = this.props,
              // decksData = Object.keys(decks).map(k => decks[k]),
              decksData = Object.values(decks)

        return (
            <View>
                { Object.keys(decks).length === 0 && decks.constructor === Object ?
                    <NoDecksText
                        style={fonts.h2}>You have not added any decks
                    </NoDecksText>
                    :
                    <FlatList
                        data={decksData}
                        renderItem={this.renderItem}
                        keyExtractor={
                            (item, index) => index.toString()
                        }
                    />
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
        margin-top: 15%;
    `,
    NumCardsText = styled.Text`
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

export default withNavigation( connect(mapStateToProps, mapDispatchToProps)(DeckListView) )
