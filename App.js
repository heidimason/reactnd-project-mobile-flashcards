import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import { black } from './utils/colors'
import { Constants } from 'expo'
import ListDecks from './components/ListDecks'
import ViewDeck from './components/ViewDeck'

function UdaciStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </View>
    )
}

class FlashcardsApp extends Component {
    render() {
        return (
            <ContainerView>
                <UdaciStatusBar
                    backgroundColor={black}
                    barStyle="light-content"
                />

                <ViewDeck />
            </ContainerView>
        )
    }
}

const ContainerView = styled.View`
        flex: 1;
    `

export default FlashcardsApp
