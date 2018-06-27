import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { black } from '../utils/colors'
import RF from 'react-native-responsive-fontsize'

function SubmitBtnTransparent ({ children, onPress, style = {} }) {
  	return (
    	<TouchableOpacity
        	style={[
                Platform.OS === 'ios'
                ? styles.iosSubmitBtnTransparent
                : styles.AndroidSubmitBtnTransparent,
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
    iosSubmitBtnTransparent: {
        borderColor: black,
        borderWidth: 1,
    	padding: 10,
    	borderRadius: 7,
    	height: 45,
    	marginLeft: 40,
    	marginRight: 40,
  	},
  	AndroidSubmitBtnTransparent: {
    	padding: 10,
    	paddingLeft: 30,
    	paddingRight: 30,
    	height: 45,
    	borderRadius: 2,
    	alignSelf: 'flex-end',
    	justifyContent: 'center',
    	alignItems: 'center',
  	},
  	submitBtnText: {
        color: black,
    	fontSize: RF(3),
    	textAlign: 'center',
  	}
})

export default SubmitBtnTransparent