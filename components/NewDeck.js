import React, { Component } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/styles/fonts'
import { forms } from '../utils/styles/forms'
import { white, black } from '../utils/styles/colors'
import { btns } from '../utils/styles/btns'
import { views } from '../utils/styles/views'
import SubmitBtn from './SubmitBtn'
import { connect } from 'react-redux'
import { addDeck, fetchDecks } from '../actions'

class NewDeck extends Component {
    state = {
        titleInput: ''
    }

    changeTitle = titleInput => {
        this.setState({titleInput})
    }

    toDeck = () => {
        const { navigation } = this.props,
                     deckObj = this.state

        navigation.navigate('DeckView', {
            title: deckObj.titleInput,
            questions: []
        })
    }

    submitDeckTitle = () => {
        const { addDeckTitle, fetchAllDecks, decks } = this.props,
                                      { titleInput } = this.state,
                                             deckObj = this.state,
                                           decksData = Object.values(decks),
                                          deckTitles = decksData.map(deckTitle => deckTitle.title)

        if (titleInput === '') {
            Alert.alert('Please enter a title for your deck')
        } else if ( deckTitles.includes(titleInput) ) {
            Alert.alert('Deck title already exists')
        } else {
            const deck = {
                [deckObj.titleInput]: {
                    title: deckObj.titleInput,
                    questions: []
                }
            }

            // Dispatch action
            addDeckTitle(deck)

            // Navigate to individual deck view
            this.toDeck()

            // Reset input
            this.setState({
                titleInput: ''
            })

            // Refresh decks (e.g. for home screen)
            fetchAllDecks()
        }
    }

    render() {
        return (
            <ContainerView>
                <HeaderText
                    style={fonts.h3}>NEW DECK
                </HeaderText>

                <CenterView style={views.center}>
                    <DeckTitleText
                        style={fonts.h1}>What is the title of your new deck?
                    </DeckTitleText>

                    <View style={btns.bottomBtn}>
                        <TextInput
                            placeholder="Deck Title"
                            style={[fonts.h3, forms.textInput]}
                            selectionColor={black}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            value={this.state.titleInput}
                            onChangeText={this.changeTitle}
                        />

                        <SubmitBtn
                            style={{backgroundColor: black, marginTop: '10%'}}
                            onPress={this.submitDeckTitle}>Create Deck
                        </SubmitBtn>
                    </View>
                </CenterView>
            </ContainerView>
        )
    }
}

const ContainerView = styled.View`
        background-color: white;
    `,
    HeaderText = styled.Text`
        padding: 10%;
        position: absolute;
        text-align: right;
        width: 100%;
    `,
    CenterView = styled.View`

    `,
    DeckTitleText = styled.Text`
        padding: 10%;
        text-align: center;
    `

const mapStateToProps = decks => {
    return {
        decks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDeckTitle: d => dispatch( addDeck(d) ),
        fetchAllDecks: () => dispatch( fetchDecks() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)
