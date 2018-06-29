import React, { Component } from 'react'
import { Text, View, StatusBar, Platform } from 'react-native'
import styled from 'styled-components/native'
import { black, white } from './utils/colors'
import { Constants } from 'expo'
import { createBottomTabNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import RF from 'react-native-responsive-fontsize'
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

const Tabs = createBottomTabNavigator({
    ListDecks: {
        screen: ListDecks,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) =>
                <Ionicons
                    name='ios-home'
                    size={RF(4)}
                    color={tintColor}
                />
        },
    },
    ViewDeck: {
        screen: ViewDeck,
        navigationOptions: {
            tabBarLabel: 'Add Entry',
            tabBarIcon: ({ tintColor }) =>
                <FontAwesome
                    name='plus-square'
                    size={RF(4)}
                    color={tintColor}
                />
        },
    },
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? black : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : black,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

class FlashcardsApp extends Component {
    render() {
        return (
            <ContainerView>
                <UdaciStatusBar
                    backgroundColor={black}
                    barStyle="light-content"
                />

                <Tabs />
            </ContainerView>
        )
    }
}

const ContainerView = styled.View`
        flex: 1;
    `

export default FlashcardsApp
