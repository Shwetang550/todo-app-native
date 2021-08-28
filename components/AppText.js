import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

const AppText = ({style, children}) => {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    )
}

export default AppText

const styleObj = Platform.select({
    ios: {
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: '800'
    },
    android: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: '800'
    }
})

const styles = StyleSheet.create({
    text: {
        ...styleObj,
    }
})
