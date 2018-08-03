import React, { Component } from 'react'
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native'
import { ContainerView, HeaderText, CenterView, DeckTitleText, BtnBottomView } from '../utils/styles'
import { fonts } from '../utils/styles/fonts'
import { forms } from '../utils/styles/forms'
import { black } from '../utils/styles/colors'
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
                    style={[fonts.h3, styles.header]}>NEW DECK
                </HeaderText>

                <CenterView style={styles.center}>
                    <DeckTitleText
                        style={fonts.h1}>What is the title of your new deck?
                    </DeckTitleText>

                    <BtnBottomView>
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
                    </BtnBottomView>
                </CenterView>
            </ContainerView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: '10%',
        paddingRight: '10%',
        paddingBottom: '10%',
        position: 'absolute',
        textAlign: 'right',
        width: '100%'
    },
    center: {
        justifyContent: 'center',
        height: '100%'
    }
})

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
