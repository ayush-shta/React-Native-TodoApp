import React, { Component } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import TodoService from '../realm/service/todoService';
import Color from '../constants/Color'

class AddTodo extends Component {

    state = {
        newTask: '',
        note: '',
        showBottomView: false
    }

    saveTodo = () => {
        const newTask = this.state.newTask.trim();
        if (newTask === '') {
            return;
        }
        let todoList = TodoService.save(newTask);
        this.setState({
            newTask: ''
        });

        this.props.updateTodoList(todoList);
    }



    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    onSubmitEditing={this.saveTodo}
                    placeholder='Add a todo'
                    value={this.state.newTask}
                    onChangeText={(text) => this.setState({ newTask: text })} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    textInput: {
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: Color.VERY_LIGHT_GREY,
        borderRadius: 8,
        backgroundColor: Color.WHITE,
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        height: 44,
        backgroundColor: Color.APP_THEME,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
});

export default AddTodo;