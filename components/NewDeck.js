import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { fonts } from '../utils/fonts'
import { forms } from '../utils/forms'
import { white, black } from '../utils/colors'
import { btns } from '../utils/btns'
import SubmitBtn from './SubmitBtn'
import { NavigationActions } from 'react-navigation'

class NewDeck extends Component {
    state = {
        title: ''
    }

    changeTitle = e => {
        this.setState({
            title: e.target.value
        })
    }

    toHome = () => {
        this.props.navigation.dispatch(
            NavigationActions.back({key: 'NewDeck'})
        )
    }

    addDeck = e => {
        e.preventDefault()

        // Navigate to home
        this.toHome()
    }

    render() {
        return (
            <ContainerView>
                <HeaderText
                    style={fonts.h3}>NEW DECK
                </HeaderText>

                <CenterView>
                    <DeckTitleText
                        style={fonts.h1}>What is the title of your new deck?
                    </DeckTitleText>

                    <View style={btns.bottomBtn}>
                        <TextInput
                            placeholder="Deck Title"
                            style={[fonts.h3, forms.textInput]}
                            selectionColor={black}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            value={this.state.title}
                            onChange={this.changeTitle}
                        />

                        <SubmitBtn
                            style={{backgroundColor: black, marginTop: '10%'}}
                            onPress={this.addDeck}>Submit
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
    HeaderText = styled.Text`
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
    `

export default NewDeck
