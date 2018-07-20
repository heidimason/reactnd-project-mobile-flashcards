import React, { Component } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import { forms } from '../utils/forms'
import { white, black } from '../utils/colors'
import { btns } from '../utils/btns'
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
        const { addDeckTitle, fetchAllDecks } = this.props,
                               { titleInput } = this.state,
                                      deckObj = this.state

        if (titleInput === '') {
            Alert.alert('Please enter a title for your deck')
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

                <CenterView>
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
        align-items: center;
        justify-content: center;
        height: 100%;
    `,
    DeckTitleText = styled.Text`
        padding: 10%;
        text-align: center;
    `

const mapDispatchToProps = dispatch => {
    return {
        addDeckTitle: d => dispatch( addDeck(d) ),
        fetchAllDecks: () => dispatch( fetchDecks() )
    }
}

export default connect(null, mapDispatchToProps)(NewDeck)
