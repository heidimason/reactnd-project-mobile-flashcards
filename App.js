import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { View, StatusBar, Platform } from 'react-native'
import { black, white } from './utils/colors'
import { Constants } from 'expo'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import RF from 'react-native-responsive-fontsize'
import ListDecks from './components/ListDecks'
import NewDeck from './components/NewDeck'
import DeckView from './components/DeckView'
import NewQuestion from './components/NewQuestion'
import QuizView from './components/QuizView'
import { setLocalNotification } from './utils/helpers'

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
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor }) =>
                <FontAwesome
                    name='plus-square'
                    size={RF(4)}
                    color={tintColor}
                />
        }
    }
}, {
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

const stackNavOptions = {
    headerStyle: {
        backgroundColor: black
    },
    headerTintColor: white,
    headerTitleStyle: {
        fontSize: RF(3),
        fontWeight: 'bold'
    }
}

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    DeckView: {
        screen: DeckView,
        navigationOptions: stackNavOptions
    },
    NewQuestion: {
        screen: NewQuestion,
        navigationOptions: stackNavOptions
    },
    QuizView: {
        screen: QuizView,
        navigationOptions: stackNavOptions
    }
})

class FlashcardsApp extends Component {
    componentDidMount() {
        setLocalNotification()
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <UdaciStatusBar
                        backgroundColor={black}
                        barStyle="light-content"
                    />

                    <MainNavigator />
                </View>
            </Provider>
        )
    }
}

export default FlashcardsApp
