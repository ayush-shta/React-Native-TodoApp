import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

import TodoService from '../realm/service/todoService'
import Color from '../constants/Color'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.todo = this.props.navigation.getParam('todo', null);
        this.state = {
            task: this.todo.task,
            isCompleted: this.todo.isCompleted,
        }
    }

    static navigationOptions = {
        title: 'Todo Detail',
    };

    updateTodo = () => {
        TodoService.update(() => {
            this.todo.task = this.state.task;
            this.todo.isCompleted = this.state.isCompleted;
        });
        this.props.navigation.navigate('Home', {
            isSaved: true
        });
    }

    // changeCompletedStatus() {
    //     const todo = this.state.todo;
    //     TodoService.update(() => {
    //         todo.isCompleted = !todo.isCompleted;
    //     });
    //     this.updateTodo();
    // }

    // onTextChange(text) {
    //     var task = text;
    //     //TODO refactor this
    //     TodoService.update(() => {
    //         this.state.todo.task = text;
    //     })
    //     this.updateTodo();
    // }


    changeCompletedStatus() {
        this.setState({
            isCompleted: !this.state.isCompleted,
        });
    }

    render() {
        let completedStatus = "Not Completed";
        if (this.state.isCompleted) { completedStatus = "Completed"; }

        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    value={this.state.task}
                    onChangeText={(text) => this.setState({ task: text })}
                />

                <TextInput style={[styles.textInput, styles.mulitLineTextInput]}
                    placeholder='Add a Note'
                    multiline={true}
                    // numberOfLines={3}
                    maxLength={40}
                    // value={this.state.note}
                    onChangeText={(text) => this.setState({ note: text })}
                />
                <View style={styles.isCompletedContainer}>
                    <Text style={{ fontSize: 18 }}>Status: </Text>
                    <Text style={{ fontSize: 18 }}>{completedStatus}</Text>
                </View>

                <TouchableHighlight style={styles.button}
                    onPress={this.updateTodo}
                    underlayColor={Color.BUTTON_UNDERLAY}
                >
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>

            </View>

        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: Color.WHITE,
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
    mulitLineTextInput: {
        height: 80,
    },
    isCompletedContainer: {
        marginTop: 10,
        marginBottom: 10,
        // flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
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

export default Detail;
