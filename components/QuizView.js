import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import RF from 'react-native-responsive-fontsize'
import { white, black, green, red } from '../utils/colors'
import SubmitBtn from './SubmitBtn'
import { btns } from '../utils/btns'
import { connect } from 'react-redux'

class QuizView extends Component {
    state = {
        counter: 0,
        score: 0,
        showAnswer: false
    }

    onShowAnswer = () => {
        this.setState({
            showAnswer: true
        })
    }

    isCorrect = () => {
        let { counter, score } = this.state

        this.setState({
            counter: counter + 1,
            score: score + 1,
            showAnswer: false
        })
    }

    isIncorrect = () => {
        this.setState({
            counter: counter + 1,
            showerAnswer: false
        })
    }

    render() {
        const { questions } = this.props,
            { counter, showAnswer, score } = this.state,
        unansweredQuestions = counter < questions.length

        return (
            <ContainerView>
                <Text style={fonts.h2}>{counter + 1}/{questions.length}</Text>

                <CenterView>
                    <Text style={fonts.h1}>{questions[counter].question}</Text>

                    { showAnswer === false ?
                        <TouchableOpacity onPress={this.onShowAnswer}>
                            <AnswerText style={fonts.h2}
                                onPress={this.onShowAnswer}>Show Answer
                            </AnswerText>
                        </TouchableOpacity>
                        :
                        <AnswerText style={fonts.h2}>{questions[counter].answer}</AnswerText>
                    }

                    <View style={btns.bottomBtn}>
                        <SubmitBtn
                            style={{backgroundColor: green}}
                            onPress={this.isCorrect}>Correct
                        </SubmitBtn>

                        <SubmitBtn
                            style={{backgroundColor: red, marginTop: '3%'}}
                            onPress={this.isIncorrect}>Incorrect
                        </SubmitBtn>
                    </View>
                </CenterView>
            </ContainerView>
        )
    }
}

const ContainerView = styled.View`
        backgroundColor: white;
    `,
    CenterView = styled.View`
        align-items: center;
        justify-content: center;
        height: 100%;
    `,
    AnswerText = styled.Text`
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
