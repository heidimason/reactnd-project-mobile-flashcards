import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { ContainerView, CenterView, BtnBottomView } from '../utils/styles'
import { fonts } from '../utils/styles/fonts'
import { black, green, red } from '../utils/styles/colors'
import SubmitBtn from './SubmitBtn'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'

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

        // Reset quiz state
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

        if (unansweredQuestions === false) {
            clearLocalNotification()
                .then(setLocalNotification)
        }

        return (
            <ContainerView>
                { unansweredQuestions ?
                    <View>
                        <CounterText
                            style={fonts.h2}>{counter + 1} / {questions.length}
                        </CounterText>

                        <CenterView style={styles.center}>
                            { displayAnswer === false ?
                                <CenterView style={styles.center}>
                                    <QuestionAnswerText
                                        style={fonts.h1}
                                        numberOfLines={6}>{questions[counter].question}
                                    </QuestionAnswerText>

                                    <TouchableOpacity
                                        onPress={this.onDisplayAnswer}>
                                        <ShowText
                                            style={fonts.h2}>Show Answer
                                        </ShowText>
                                    </TouchableOpacity>
                                </CenterView>
                                :
                                <CenterView style={styles.center}>
                                    <QuestionAnswerText
                                        style={fonts.h1}
                                        numberOfLines={6}>{questions[counter].answer}
                                    </QuestionAnswerText>

                                    <TouchableOpacity onPress={this.onDisplayQuestion}>
                                        <ShowText
                                            style={fonts.h2}>Show Question
                                        </ShowText>
                                    </TouchableOpacity>
                                </CenterView>
                            }

                            <BtnBottomView>
                                <SubmitBtn
                                    style={{backgroundColor: green}}
                                    onPress={this.isCorrect}>Correct
                                </SubmitBtn>

                                <SubmitBtn
                                    style={{backgroundColor: red, marginTop: '3%', marginBottom: '5%'}}
                                    onPress={this.isIncorrect}>Incorrect
                                </SubmitBtn>
                            </BtnBottomView>
                        </CenterView>
                    </View>
                    :
                    <CenterView style={styles.center}>
                        <Text
                            style={fonts.h1}
                            numberOfLines={6}>Score: {score} / {questions.length}
                        </Text>

                        <BtnBottomView>
                            <SubmitBtn style={{backgroundColor: green}}
                                onPress={this.toQuiz}>Restart Quiz
                            </SubmitBtn>

                            <SubmitBtn
                                style={{backgroundColor: black, marginTop: '3%', marginBottom: '5%'}}
                                onPress={this.backToDeck}>Back to Deck
                            </SubmitBtn>
                        </BtnBottomView>
                    </CenterView>
                }
            </ContainerView>
        )
    }
}

const CounterText = styled.Text`
        margin: 5%;
        position: absolute;
    `,
    QuestionAnswerText = styled.Text`
        font-weight: bold;
        text-align: center;
    `,
    ShowText = styled.Text`
        color: red;
        margin-top: 3%;
    `

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        height: '100%'
    }
})

const mapStateToProps = (state, { navigation }) => {
    const { title, questions } = navigation.state.params

    return {
        title,
        questions
    }
}

export default connect(mapStateToProps)(QuizView)
