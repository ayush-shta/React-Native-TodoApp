import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import AddTodo from './AddTodo';
import TodoListItem from './TodoListItem';
import TodoService from '../realm/service/todoService'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: TodoService.findall(),
        }
        console.log(this.state.todoList);
    }

    static navigationOptions = {
        title: 'Todos',
    };

    refresh() {
        this.state.todoList = TodoService.findall();
    }

    updateTodoList(todoList) {
        this.setState({
            todoList: todoList
        });
    }

    deleteTodo(todo) {
        TodoService.delete(todo);
        this.updateTodoList(this.state.todoList);
        // this.setState({
        //     todoList: TodoService.findall()
        // });
    }

    showDetail(todo) {
        this.props.navigation.navigate('Detail', {
            todo: todo
        });
    }

    render() {
        const isSaved = this.props.navigation.getParam('isSaved', false);

        if (isSaved) {
            this.refresh();
        }

        return (
            <View style={styles.container}>

                <FlatList
                    data={this.state.todoList}
                    renderItem={({ item }) =>
                        <TodoListItem
                            todo={item}
                            onDeleteTodo={(todo) => this.deleteTodo(todo)}
                            onShowDetail={(todo) => this.showDetail(todo)}
                        />
                    }
                    keyExtractor={(item, index) => item.id.toString()}
                />

                <View style={{ backgroundColor: '#E0E0E0' }}>
                    <AddTodo
                        updateTodoList={(todoList) => this.updateTodoList(todoList)}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        flex: 1
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 4
    }
});

export default TodoList;
