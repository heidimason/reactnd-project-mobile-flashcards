import React from 'react'
import { Text, TouchableOpacity, Platform } from 'react-native'
import { btns } from '../utils/btns'

function SubmitBtn ({ children, onPress, style = {} }) {
  	return (
    	<TouchableOpacity
        	style={[
                Platform.OS === 'ios'
                ? btns.iosSubmitBtn
                : btns.AndroidSubmitBtn,
                style
            ]}
        	onPress={onPress}>
        	<Text
                style={btns.submitBtnText}>{children}
            </Text>
    	</TouchableOpacity>
  	)
}

export default SubmitBtn