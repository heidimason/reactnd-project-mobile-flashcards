import React, { Component } from 'react'
import { Text, View, Alert, StyleSheet } from 'react-native'
import { ContainerView, CenterView, DeckTitleText, NumCardsText, BtnBottomView } from '../utils/styles'
import { fonts } from '../utils/styles/fonts'
import { gray, black } from '../utils/styles/colors'
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
                <CenterView style={styles.center}>
                    <CenterView style={styles.center}>
                        <DeckTitleText
                            style={fonts.h1}
                            numberOfLines={6}>{title}
                        </DeckTitleText>

                        { questions && questions.length !== 1 ?
                            <NumCardsText
                                style={[fonts.h2, styles.numCards]}>{questions.length} cards
                            </NumCardsText>
                            :
                            <NumCardsText
                                style={[fonts.h2, styles.numCards]}>{questions.length} card
                            </NumCardsText>
                        }
                    </CenterView>

                    <BtnBottomView>
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
                    </BtnBottomView>
                </CenterView>
            </ContainerView>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        height: '100%'
    },
    numCards: {
        color: gray
    }
})

const mapStateToProps = (state, { navigation }) => {
    const { title, questions } = navigation.state.params

    return {
        title,
        questions
    }
}

export default connect(mapStateToProps)(DeckView)
