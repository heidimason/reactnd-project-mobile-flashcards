import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { white } from '../utils/colors'
import RF from 'react-native-responsive-fontsize'

function SubmitBtn ({ children, onPress, style = {} }) {
  	return (
    	<TouchableOpacity
        	style={[
                Platform.OS === 'ios'
                ? styles.iosSubmitBtn
                : styles.AndroidSubmitBtn,
                style
            ]}
        	onPress={onPress}>
        	<Text
                style={styles.submitBtnText}>{children}
            </Text>
    	</TouchableOpacity>
  	)
}

const styles = StyleSheet.create({
    iosSubmitBtn: {
    	padding: 10,
    	borderRadius: 7,
    	height: 45,
    	marginLeft: 40,
    	marginRight: 40
  	},
  	AndroidSubmitBtn: {
    	padding: 10,
    	paddingLeft: 30,
    	paddingRight: 30,
    	height: 45,
    	borderRadius: 2,
    	alignSelf: 'flex-end',
    	justifyContent: 'center',
    	alignItems: 'center'
  	},
  	submitBtnText: {
        color: white,
    	fontSize: RF(3),
    	textAlign: 'center'
  	}
})

export default SubmitBtn