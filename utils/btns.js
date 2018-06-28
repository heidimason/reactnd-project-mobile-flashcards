import { StyleSheet } from 'react-native'
import RF from 'react-native-responsive-fontsize'

export const btns = StyleSheet.create({
    bottomBtn: {
        position: 'absolute',
        bottom: '10%',
        width: '100%'
    },
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
        fontSize: RF(3),
        fontWeight: 'bold',
        textAlign: 'center'
    }
})