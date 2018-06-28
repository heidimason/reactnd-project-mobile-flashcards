import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import RF from 'react-native-responsive-fontsize'
import { white, black } from '../utils/colors'
import SubmitBtn from './SubmitBtn'
import DeckTitle from './DeckTitle'
import { btns } from '../utils/btns'

class ViewDeck extends Component {
    render() {
        return (
            <View>
                <HeaderText
                    style={fonts.h3}>
                    <Entypo
                        name={'arrow-long-left'}
                        size={RF(3)}
                    />     Deck Title
                </HeaderText>

                <CenterView>
                    <DeckTitle />

                    <View style={btns.bottomBtn}>
                        <SubmitBtn
                            style={{borderColor: black, borderWidth: 1}}>Add Card
                        </SubmitBtn>

                        <SubmitBtn
                            style={{backgroundColor: black, marginTop: '3%'}}>
                            <Text
                                style={{color: white}}>Start Quiz
                            </Text>
                        </SubmitBtn>
                    </View>
                </CenterView>
            </View>
        )
    }
}

const HeaderText = styled.Text`
        background-color: black;
        color: white;
        font-weight: bold;
        padding: 5% 10%;
    `,
    CenterView = styled.View`
        align-items: center;
        height: 90%;
    `

export default ViewDeck
