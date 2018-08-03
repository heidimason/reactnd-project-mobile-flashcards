import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { CenterView, DeckTitleText, NumCardsText } from '../utils/styles'
import { fonts } from '../utils/styles/fonts'
import { gray } from '../utils/styles/colors'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'

const DeckListItem = ({ title, questions }) => {
    return (
        <CenterView style={styles.center}>
            <DeckTitleText
                style={[fonts.h1, styles.deckTitle]}>{title}
            </DeckTitleText>

            { questions && questions.length !== 1 ?
                <NumCardsText
                    style={[fonts.h2, styles.numCards]}>{questions.length} cards
                </NumCardsText>
                :
                <NumCardsText
                    style={[fonts.h2, styles.numCards]}>{questions.length} card
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
                        style={{paddingBottom: '35%'}}
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

const NoDecksText = styled.Text`
        margin-top: 15%;
        text-align: center;
    `

const styles = StyleSheet.create({
    center: {
        borderBottomColor: gray,
        borderBottomWidth: 2
    },
    deckTitle: {
        marginTop: '15%'
    },
    numCards: {
        color: gray,
        marginBottom: '15%'
    }
})

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
