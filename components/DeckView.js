import React, { Component } from 'react'
import { Text, View } from 'react-native'
// import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import RF from 'react-native-responsive-fontsize'
import { white, black } from '../utils/colors'
import { btns } from '../utils/btns'
import SubmitBtn from './SubmitBtn'
import { connect } from 'react-redux'

class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params

        return {
            title
        }
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

                <CenterView>
                    <CenterView>
                        <DeckTitleText
                            style={fonts.h1}>{title}
                        </DeckTitleText>

                        <NumCardsText
                            style={fonts.h2}>{questions.length} cards
                        </NumCardsText>
                    </CenterView>

                    <View style={btns.bottomBtn}>
                        <SubmitBtn
                            style={{borderColor: black, borderWidth: 1}}>
                            <Text
                                style={{color: black}}>Add Card
                            </Text>
                        </SubmitBtn>

                        <SubmitBtn
                            style={{backgroundColor: black, marginTop: '3%', marginBottom: '5%'}}>Start Quiz
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
    // HeaderText = styled.Text`
    //     background-color: black;
    //     color: white;
    //     font-weight: bold;
    //     padding: 5% 10%;
    //     position: absolute;
    //     width: 100%;
    // `,
    CenterView = styled.View`
        align-items: center;
        justify-content: center;
        height: 100%;
    `,
    /* TODO: Refactor */
    DeckTitleText = styled.Text`
        font-weight: bold;
        /* margin-top: 15%; */
        text-align: center;
    `,
    NumCardsText = styled.Text`
        margin-top: 1%;
        margin-bottom: 15%;
    `

const mapStateToProps = (state, { navigation }) => {
    const { title, questions } = navigation.state.params

    return {
        title,
        questions
    }
}

export default connect(mapStateToProps)(DeckView)
