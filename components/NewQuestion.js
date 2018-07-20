import React, { Component } from 'react'
import { View, TextInput, Alert } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import { forms } from '../utils/forms'
import { white, black } from '../utils/colors'
import { btns } from '../utils/btns'
import SubmitBtn from './SubmitBtn'
import { connect } from 'react-redux'
import { addCard } from '../actions'

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
                                          deck = { title, questions }

        navigation.navigate('DeckView', deck)
    }

    submitQuestion = () => {
        const { title, questions, submitCard } = this.props,
                          { question, answer } = this.state

        if (question === '') {
            Alert.alert('Please enter a question for your card')
        } else if (answer === '') {
            Alert.alert('Please enter an answer for your card')
        } else {
            const deck = { title, questions }

            deck.questions.push({
                question,
                answer
            })

            submitCard({ title, deck })

            // fetchSingleDeck(questions)
            // console.log(questions)

            // Navigate back to individual deck view
            this.backToDeck()

            // Reset inputs
            this.setState({
                question: '',
                answer: ''
            })
        }
    }

    render() {
        const { question, answer } = this.state

        return (
            <ContainerView>
                <CenterView>
                    <View style={btns.bottomBtn}>
                        <TextInput
                            placeholder="Enter your question here"
                            style={[fonts.h3, forms.textInput]}
                            selectionColor={black}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            value={this.state.question}
                            onChangeText={this.changeQuestion}
                        />

                        <TextInput
                            placeholder="Enter your answer here"
                            style={[fonts.h3, forms.textInput]}
                            selectionColor={black}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            value={this.state.answer}
                            onChangeText={this.changeAnswer}
                        />

                        <SubmitBtn
                            style={{backgroundColor: black, marginTop: '10%'}}
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
        align-items: center;
        justify-content: center;
        height: 100%;
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
        submitCard: c => dispatch( addCard(c) )
        // fetchSingleDeck: d => dispatch( fetchDeck(d) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)
