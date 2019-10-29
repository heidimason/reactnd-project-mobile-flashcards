import React from 'react'
import { Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { white } from '../utils/styles/colors'
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
        marginHorizontal: 40
    },
    AndroidSubmitBtn: {
        padding: 10,
        paddingHorizontal: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        alignItems: 'center',
        width: '65%'
    },
    submitBtnText: {
        color: white,
        fontSize: RF(3),
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default SubmitBtn