import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import { forms } from '../utils/forms'
import { black } from '../utils/colors'
import { btns } from '../utils/btns'
import SubmitBtn from './SubmitBtn'

class NewDeck extends Component {
    render() {
        return (
            <View>
                <HeaderText
                    style={fonts.h3}>NEW DECK
                </HeaderText>

                <CenterView>
                    <DeckTitleText
                        style={fonts.h1}>What is the title of your new deck?
                    </DeckTitleText>

                    <View style={btns.bottomBtn}>
                        <TitleTextInput style={[fonts.h3, forms.textInput]} placeholder="Deck Title" selectionColor={black}/>

                        <SubmitBtn
                            style={{backgroundColor: black, marginTop: '10%'}}>Submit
                        </SubmitBtn>
                    </View>
                </CenterView>
            </View>
        )
    }
}

const HeaderText = styled.Text`
        padding: 10%;
        position: absolute;
        text-align: right;
        width: 100%;
    `,
    CenterView = styled.View`
        align-items: center;
        justify-content: center;
        height: 100%;
    `,
    DeckTitleText = styled.Text`
        padding: 10%;
        text-align: center;
    `,
    TitleTextInput = styled.TextInput`

    `

export default NewDeck
