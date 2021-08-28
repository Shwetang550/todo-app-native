import React from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';

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
    }
})
