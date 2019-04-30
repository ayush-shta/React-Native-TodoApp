import React, { Component } from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

import CheckBox from './CheckBox';
import TodoService from '../realm/service/todoService';
import Color from '../constants/Color'


class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo
        }
    }

    changeCompletedStatus = () => {
        var todo = this.state.todo;
        TodoService.update(() => {
            todo.isCompleted = !todo.isCompleted;
        });
        this.setState({
            todo: todo
        });
    }

    render() {
        let todo = this.state.todo;
        let color = todo.isCompleted ? Color.LIGHT_GREY : Color.BLACK;
        let textDecorationLine = todo.isCompleted ? 'line-through' : 'none';

        return (
            <TouchableHighlight style={styles.itemContainer}
                underlayColor={Color.LIST_ITEM_UDERLAY}
                onPress={this.changeCompletedStatus}
            >
                <View style={styles.item}>
                    <CheckBox data={todo} style={{ flex: 1 }} onCheckBoxPressed={this.changeCompletedStatus} />
                    <Text style={{ fontSize: 18, color: color, textDecorationLine: textDecorationLine, flex: 1 }}>{todo.task}</Text>

                    <Menu>
                        <MenuTrigger text='...' style={{ padding: 8 }} />
                        <MenuOptions>
                            <MenuOption onSelect={() => this.props.onShowDetail(todo)} text='View Detail' style={{ padding: 10 }} />
                            <MenuOption onSelect={() => this.props.onDeleteTodo(todo)} text='Delete' style={{ padding: 10 }} />
                        </MenuOptions>
                    </Menu>
                </View>
            </TouchableHighlight>
        )
    }
}


const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: Color.GREY,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 4
    },
});

export default TodoListItem;