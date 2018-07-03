import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import RF from 'react-native-responsive-fontsize'
import DeckListView from './DeckListView'
import { white, black } from '../utils/colors'
import { btns } from '../utils/btns'
import SubmitBtn from './SubmitBtn'

class DeckView extends Component {
    render() {
        return (
            <ContainerView>
                <HeaderText
                    style={fonts.h3}>
                    <Entypo
                        name={'arrow-long-left'}
                        size={RF(3)}
                    />     Deck Title
                </HeaderText>

                <CenterView>
                    <DeckListView />

                    <View style={btns.bottomBtn}>
                        <SubmitBtn
                            style={{borderColor: black, borderWidth: 1}}>
                            <Text
                                style={{color: black}}>Add Card
                            </Text>
                        </SubmitBtn>

                        <SubmitBtn
                            style={{backgroundColor: black, marginTop: '3%'}}>Start Quiz
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
    `

export default DeckView
