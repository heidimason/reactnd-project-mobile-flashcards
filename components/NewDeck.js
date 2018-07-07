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
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import serializeForm from 'form-serialize'
import uuid from 'uuid'

class NewDeck extends Component {
    state = {
        id: '',
        title: ''
    }

    changeTitle = title => {
        this.setState({title})
    }

    toHome = () => {
        this.props.navigation.dispatch(
            NavigationActions.back({key: 'NewDeck'})
        )
    }

    addDeck = e => {
        if (this.state.title !== '') {
            const values = serializeForm(e.target, { hash: true })

            const deck = Object.assign(values, {
                id: uuid(),
                title: this.state.title
            })

            this.props.addDeckTitle(deck)

            // alert(deck.title)

            // Navigate to home
            this.toHome()
        } else {
            alert('Please enter a title')
        }

        this.setState({
            title: ''
        })
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
                            onChangeText={this.changeTitle}
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

const mapDispatchToProps = dispatch => {
    return {
        addDeckTitle: d => dispatch( addDeck(d) )
    }
}

export default connect(null, mapDispatchToProps)(NewDeck)
