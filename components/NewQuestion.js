import React, { Component } from 'react'
import { View, TextInput, Alert } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/styles/fonts'
import { forms } from '../utils/styles/forms'
import { white, black } from '../utils/styles/colors'
import { btns } from '../utils/styles/btns'
import { views } from '../utils/styles/views'
import SubmitBtn from './SubmitBtn'
import { connect } from 'react-redux'
import { addCard, fetchDecks } from '../actions'

class NewQuestion extends Component {
    static navigationOptions = () => {
        return {
            title: 'Add Card'
        }
    }

    state = {
        question: '',
        answer: ''
    }

    changeQuestion = question => {
        this.setState({question})
    }

    changeAnswer = answer => {
        this.setState({answer})
    }

    backToDeck = () => {
        const { navigation, title, questions } = this.props,
                                          card = { title, questions }

        navigation.navigate('DeckView', card)
    }

    submitQuestion = () => {
        const { title, questions, submitCard, fetchAllDecks } = this.props,
                                         { question, answer } = this.state

        if (question === '') {
            Alert.alert('Please enter a question for your card')
        } else if (answer === '') {
            Alert.alert('Please enter an answer for your card')
        } else {
            const card = { title, questions }

            card.questions.push({
                question,
                answer
            })

            // Dispatch action
            submitCard({ title, card })

            // Navigate back to individual deck view
            this.backToDeck()

            // Reset inputs
            this.setState({
                question: '',
                answer: ''
            })

            // Refresh decks (e.g. for home screen)
            fetchAllDecks()
        }
    }

    render() {
        const { question, answer } = this.state

        return (
            <ContainerView>
                <CenterView style={views.center}>
                    <TextInputView>
                        <TextInput
                            placeholder="Your question here"
                            style={[fonts.h3, forms.textInput]}
                            selectionColor={black}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            value={this.state.question}
                            onChangeText={this.changeQuestion}
                        />

                        <TextInput
                            placeholder="Your answer here"
                            style={[fonts.h3, forms.textInput, {marginTop: '10%'}]}
                            selectionColor={black}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            value={this.state.answer}
                            onChangeText={this.changeAnswer}
                        />
                    </TextInputView>

                    <View style={btns.bottomBtn}>
                        <SubmitBtn
                            style={{backgroundColor: black, marginBottom: '5%'}}
                            onPress={this.submitQuestion}>Submit
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
    CenterView = styled.View`

    `,
    TextInputView = styled.View`
        width: 90%;
    `

const mapStateToProps = (state, { navigation }) => {
    const { title, questions } = navigation.state.params

    return {
        title,
        questions
    }
}

const mapDispatchToProps = (dispatch, { navigation }) => {
    return {
        submitCard: c => dispatch( addCard(c) ),
        fetchAllDecks: () => dispatch( fetchDecks() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)
