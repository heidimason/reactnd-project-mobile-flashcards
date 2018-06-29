import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import RF from 'react-native-responsive-fontsize'
import { white, black, green, red } from '../utils/colors'
import SubmitBtn from './SubmitBtn'
import { btns } from '../utils/btns'

class ViewQuiz extends Component {
    render() {
        return (
            <ContainerView>
                <HeaderText
                    style={fonts.h3}>
                    <Entypo
                        name={'arrow-long-left'}
                        size={RF(3)}
                    />     Quiz
                </HeaderText>

                <CenterView>
                    <Text>2/2</Text>
                    <Text>Quiz Question</Text>
                    <AnswerText>Answer</AnswerText>

                    <View style={btns.bottomBtn}>
                        <SubmitBtn
                            style={{backgroundColor: green}}>Correct
                        </SubmitBtn>

                        <SubmitBtn
                            style={{backgroundColor: red, marginTop: '3%'}}>Incorrect
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
    HeaderText = styled.Text`
        background-color: black;
        color: white;
        font-weight: bold;
        padding: 5% 10%;
        position: absolute;
        width: 100%;
    `,
    CenterView = styled.View`
        align-items: center;
        justify-content: center;
        height: 100%;
    `,

    AnswerText = styled.Text`
        color: red;
    `

export default ViewQuiz
