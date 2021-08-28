import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

// expo icons
import { MaterialCommunityIcons } from '@expo/vector-icons'

// custom components
import AppText from './AppText'

const Task = ({text, onPressDelete}) => {
    return (
        <View style={styles.container}>
                
            <View style={styles.tick_text_container}>
                <TouchableWithoutFeedback>
                    <MaterialCommunityIcons
                        name='checkbox-blank'
                        color="#c4eaed"
                        size={40}
                    />
                </TouchableWithoutFeedback>

                <AppText style={styles.text}>{text}</AppText>
            </View>
                
            <TouchableOpacity
                onPress={() => console.log()}
            >
                <MaterialCommunityIcons
                    name='trash-can'
                    color="#DC3545"
                    size={30}
                />
            </TouchableOpacity>

        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        margin: 7,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tick_text_container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    text: {
        marginLeft: 10,
    },
})
