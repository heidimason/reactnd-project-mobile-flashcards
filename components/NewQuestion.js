import React, { Component } from 'react'
import { View, TextInput, Alert } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import { forms } from '../utils/forms'
import { white, black } from '../utils/colors'
import { btns } from '../utils/btns'
import SubmitBtn from './SubmitBtn'
import { connect } from 'react-redux'
// import {  } from '../actions'

class NewQuestion extends Component {
    static navigationOptions = () => {
        // const { title } = navigation.state.params

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

    // toDeck = () => {
    //     const { navigation } = this.props,
    //                  deckObj = this.state

    //     navigation.navigate('DeckView', {
    //         title: deckObj.title,
    //         questions: []
    //     })
    // }

    submitQuestion = () => {
        const
                     { question, answer } = this.state,
                       deckObj = this.state

        if (question === '') {
            Alert.alert('Please enter a question for your card')
        } else if (answer === '') {
            Alert.alert('Please enter an answer for your card')
        } else {


            // Dispatch action


            // Navigate to individual deck view
            // this.toDeck()

            // Reset input
            this.setState({
                question: '',
                answer: ''
            })
        }
    }

    render() {
        return (
            <ContainerView>
                <CenterView>
                    <TextInput
                        placeholder="Enter your question here"
                        style={[fonts.h3, forms.textInput]}
                        selectionColor={black}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        value={this.state.title}
                        onChangeText={this.changeQuestion}
                    />

                    <TextInput
                        placeholder="Enter your answer here"
                        style={[fonts.h3, forms.textInput]}
                        selectionColor={black}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        value={this.state.title}
                        onChangeText={this.changeAnswer}
                    />

                    <View style={btns.bottomBtn}>
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

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(null, mapDispatchToProps)(NewQuestion)
