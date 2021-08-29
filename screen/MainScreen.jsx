import React from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants';

// expo-icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// custom components
import AppText from '../components/AppText';
import Task from '../components/Task';

const MainScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.todaysTask}>
                {/* Today's Tasks */}
                <AppText style={styles.title}>Today's Tasks</AppText>
            </View>

            <View style={styles.tasksContainer}>
                {/* Tasks List */}
                <Task text="Hello World" />
                <Task text="Hello 2nd World..." />
            </View>

            {/* Task Input */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'height' : 'padding'}
                style={styles.inputArea}
            >
                
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Task here..."
                />

                <TouchableOpacity
                    onPress={() => console.log()}
                >
                    <MaterialCommunityIcons
                        name="plus"
                        style={styles.inputIcon}
                    />
                </TouchableOpacity>

            </KeyboardAvoidingView>
            
        </SafeAreaView>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#eaeaed',
        paddingTop: 50,
        paddingHorizontal: 25,
    },
    todaysTask: {
        padding: Platform.OS === 'android' ? 0 : 25,
        paddingBottom: Platform.OS === 'android' ? null : 0,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    tasksContainer: {
        marginTop: 20,
        margin: Platform.OS === 'android' ? 0 : 15,
    },
    inputArea: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 999,
        padding: 13,

        marginHorizontal: 23,
        width: '100%',
        
        position: 'absolute',
        bottom: 25,
    },
    input: {
        fontSize: 18,
        marginHorizontal: 12,
    },
    inputIcon: {
        marginHorizontal: 12,
        fontSize: 30,
        color: '#157AF6',
        fontWeight: 'bold',
    },
})
