import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
// import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import { btns } from '../utils/btns'
import { text } from '../utils/text'
// import RF from 'react-native-responsive-fontsize'
import { white, black } from '../utils/colors'
import { views } from '../utils/views'
import SubmitBtn from './SubmitBtn'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

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

        clearLocalNotification()
            .then(setLocalNotification)
    }

    render() {
        const { title, questions } = this.props

        return (
            <ContainerView>
                { /* <HeaderText
                    style={fonts.h3}>
                    <Entypo
                        name={'arrow-long-left'}
                        size={RF(3)}
                    />     {title}
                </HeaderText> */ }

                <CenterView style={views.center}>
                    <CenterView style={views.center}>
                        <DeckTitleText
                            style={fonts.h1}>{title}
                        </DeckTitleText>

                        { questions && questions.length !== 1 &&
                            <NumCardsText
                                style={[fonts.h2, text.numCards]}>{questions.length} cards
                            </NumCardsText>
                        }

                        { questions && questions.length === 1 &&
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
    // HeaderText = styled.Text`
    //     background-color: black;
    //     color: white;
    //     font-weight: bold;
    //     padding: 5% 10%;
    //     position: absolute;
    //     width: 100%;
    // `,
    CenterView = styled.View`

    `,
    DeckTitleText = styled.Text`
        font-weight: bold;
        text-align: center;
    `,
    NumCardsText = styled.Text`

    `

const mapStateToProps = (state, { navigation }) => {
    const { title, questions } = navigation.state.params

    return {
        title,
        questions
    }
}

export default connect(mapStateToProps)(DeckView)
