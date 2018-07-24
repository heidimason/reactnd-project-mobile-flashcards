import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import { btns } from '../utils/btns'
import { views } from '../utils/views'
import { white, black, green, red } from '../utils/colors'
import SubmitBtn from './SubmitBtn'
import { connect } from 'react-redux'

class QuizView extends Component {
    state = {
        counter: 0,
        score: 0,
        displayAnswer: false
    }

    onDisplayAnswer = () => {
        this.setState({
            displayAnswer: true
        })
    }

    onDisplayQuestion = () => {
        this.setState({
            displayAnswer: false
        })
    }

    isCorrect = () => {
        const { counter, score } = this.state

        this.setState({
            counter: counter + 1,
            score: score + 1,
            displayAnswer: false
        })
    }

    isIncorrect = () => {
        const { counter } = this.state

        this.setState({
            counter: counter + 1,
            showerAnswer: false
        })
    }

    toQuiz = () => {
        const { navigation } = this.props

        navigation.navigate('QuizView')

        this.setState({
            counter: 0,
            score: 0,
            displayAnswer: false
        })
    }

    backToDeck = () => {
        const { navigation } = this.props

        navigation.goBack()
    }

    render() {
        const { questions } = this.props,
            { counter, displayAnswer, score } = this.state,
                          unansweredQuestions = counter < questions.length

        return (
            <ContainerView>
                { unansweredQuestions ?
                    <View>
                        <CounterText style={fonts.h2}>{counter + 1} / {questions.length}</CounterText>

                        <CenterView style={views.center}>
                            { displayAnswer === false ?
                                <CenterView style={views.center}>
                                    <Text style={fonts.h1}>{questions[counter].question}</Text>

                                    <TouchableOpacity onPress={this.onDisplayAnswer}>
                                        <QuestionAnswerText
                                            style={fonts.h2}>Show Answer
                                        </QuestionAnswerText>
                                    </TouchableOpacity>
                                </CenterView>
                                :
                                <CenterView style={views.center}>
                                    <Text style={fonts.h1}>{questions[counter].answer}</Text>

                                    <TouchableOpacity onPress={this.onDisplayQuestion}>
                                        <QuestionAnswerText
                                            style={fonts.h2}>Show Question
                                        </QuestionAnswerText>
                                    </TouchableOpacity>
                                </CenterView>
                            }

                            <View style={btns.bottomBtn}>
                                <SubmitBtn
                                    style={{backgroundColor: green}}
                                    onPress={this.isCorrect}>Correct
                                </SubmitBtn>

                                <SubmitBtn
                                    style={{backgroundColor: red, marginTop: '3%', marginBottom: '5%'}}
                                    onPress={this.isIncorrect}>Incorrect
                                </SubmitBtn>
                            </View>
                        </CenterView>
                    </View>
                    :
                    <CenterView style={views.center}>
                        <Text style={fonts.h2}>Score: {score} / {questions.length}</Text>

                        <View style={btns.bottomBtn}>
                            <SubmitBtn style={{backgroundColor: green}}
                                onPress={this.toQuiz}>Retake Quiz
                            </SubmitBtn>

                            <SubmitBtn
                                style={{backgroundColor: black, marginTop: '3%', marginBottom: '5%'}}
                                onPress={this.backToDeck}>Back to Deck
                            </SubmitBtn>
                        </View>
                    </CenterView>
                }
            </ContainerView>
        )
    }
}

const ContainerView = styled.View`
        background-color: white;
    `,
    CounterText = styled.Text`
        margin: 5%;
        position: absolute;
    `,
    CenterView = styled.View`

    `,
    QuestionAnswerText = styled.Text`
        color: red;
    `

const mapStateToProps = (state, { navigation }) => {
    const { title, questions } = navigation.state.params

    return {
        title,
        questions
    }
}

export default connect(mapStateToProps)(QuizView)