import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants';

// expo-icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// custom components
import AppText from '../components/AppText';
import Task from '../components/Task';

const MainScreen = () => {
    const [tasks, setTasks] = useState(['H1']);
    const [enterTask, setEnterTask] = useState('');

    const handleTaskAddition = () => {
        setTasks([...tasks, enterTask]);
        setEnterTask('');
    };

    const handleDelete = (text) => {
        const newTasksList = tasks.filter(i => i !== text);
        setTasks(newTasksList);
    }

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.todaysTask}>
                {/* Today's Tasks */}
                <AppText style={styles.title}>Today's Tasks</AppText>
            </View>

            <View style={styles.tasksContainer}>
                {/* Tasks List */}
                {
                    tasks.map((item, index) => (
                        <Task
                            key={index}
                            text={item}
                            onPressDelete={handleDelete}
                        />
                    ))
                }
            </View>

            {/* Task Input */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'height' : 'padding'}
                style={styles.inputArea}
            >
                
                <TextInput
                    style={styles.input}
                    placeholder={"Enter Your Task here..."}
                    value={enterTask}
                    onChangeText={text => setEnterTask(text)}
                />

                <TouchableOpacity
                    onPress={handleTaskAddition}
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
        borderColor: '#c0c0c0',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        paddingVertical: 10,

        marginHorizontal: 25,
        width: Platform.OS === 'android' ? '100%' : '85%',
        
        position: 'absolute',
        bottom: 25,
    },
    input: {
        fontSize: 18,
        margin: Platform.OS === 'android' ? null : 12,
        padding: 10,
        // paddingBottom: Platform.OS === 'android' ? null : 12,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    inputIcon: {
        marginHorizontal: 12,
        fontSize: 30,
        color: '#157AF6',
        fontWeight: 'bold',
    },
})
