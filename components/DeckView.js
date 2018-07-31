import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from '../utils/styles/fonts'
import { btns } from '../utils/styles/btns'
import { text } from '../utils/styles/text'
import { white, gray, black } from '../utils/styles/colors'
import { views } from '../utils/styles/views'
import SubmitBtn from './SubmitBtn'
import { connect } from 'react-redux'

class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params

        return {
            title
        }
    }

    toQuestion = () => {
        const { navigation, title, questions } = this.props

        navigation.navigate('NewQuestion', {title, questions})
    }

    toQuiz = () => {
        const { navigation, questions } = this.props

        if (questions.length > 0) {
            navigation.navigate('QuizView', {questions})
        } else {
            Alert.alert('Please add at least 1 card')
        }
    }

    render() {
        const { title, questions } = this.props

        return (
            <ContainerView>
                <CenterView style={views.center}>
                    <CenterView style={views.center}>
                        <DeckTitleText
                            style={fonts.h1}
                            numberOfLines={6}>{title}
                        </DeckTitleText>

                        { questions && questions.length !== 1 ?
                            <NumCardsText
                                style={[fonts.h2, text.numCards]}>{questions.length} cards
                            </NumCardsText>
                            :
                            <NumCardsText
                                style={[fonts.h2, text.numCards]}>{questions.length} card
                            </NumCardsText>
                        }
                    </CenterView>

                    <View style={btns.bottomBtn}>
                        <SubmitBtn
                            style={{borderColor: black, borderWidth: 1}}
                            onPress={this.toQuestion}>
                            <Text
                                style={{color: black}}>Add Card
                            </Text>
                        </SubmitBtn>

                        <SubmitBtn
                            style={{backgroundColor: black, marginTop: '3%', marginBottom: '5%'}}
                            onPress={this.toQuiz}>Start Quiz
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
    DeckTitleText = styled.Text`
        font-weight: bold;
        text-align: center;
    `,
    NumCardsText = styled.Text`
        color: gray
    `

const mapStateToProps = (state, { navigation }) => {
    const { title, questions } = navigation.state.params

    return {
        title,
        questions
    }
}

export default connect(mapStateToProps)(DeckView)
