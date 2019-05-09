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


    renderBottomView = () => {
        if (this.state.showBottomView) {
            return (
                <View>
                    <TextInput style={styles.textInput}
                        placeholder='Add a Note'
                        multiline
                        numberOfLines={3}
                        maxLength={40}
                        value={this.state.note}
                        onChangeText={text => this.setState({ note: text })} />

                    <TouchableOpacity style={styles.button}
                    // onPress={() => this.onSaveClicked()}      
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            );
        }

    }



    render() {
        return (
            <View style={styles.container}
            // onBlur={() => this.setState({ showBottomView: false })}
            >
                <TextInput style={styles.textInput}
                    onSubmitEditing={this.saveTodo}
                    // onFocus={() => this.setState({ showBottomView: true })}
                    placeholder='Add a todo'
                    value={this.state.newTask}
                    onChangeText={(text) => this.setState({ newTask: text })} />
                {this.renderBottomView()}
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