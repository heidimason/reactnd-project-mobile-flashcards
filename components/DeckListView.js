import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import { colors } from '../utils/colors'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'

function DeckData ({ title, numCards }) {
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

class DeckListView extends Component {
    componentDidMount () {
        this.props.getAllDecks()
    }

    renderItem = ({ item }) => {
        return <DeckData {...item} />
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
        border-bottom-width: 1;
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

const mapStateToProps = state => {
    return {
        decks: state.decks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllDecks: () => dispatch( fetchDecks() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView)