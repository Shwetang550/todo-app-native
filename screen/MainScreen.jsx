import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';

// custom components
import AppText from '../components/AppText';

const MainScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.title}>
                {/* Today's Tasks */}
                <AppText>Today's Task</AppText>
            </View>

            <View style={styles.tasksContainer}>
                {/* Tasks List */}
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
    },
    title: {
        paddingTop: 50,
        paddingHorizontal: 20,
    }
})
