/**
 * @format
 */

import 'react-native';
import React from 'react';

import TodoService from '../src/realm/service/todoService'
import AddTodo from '../src/components/AddTodo';
import CheckBox from '../src/components/CheckBox';
import TodoListItem from '../src/components/TodoListItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { MenuProvider } from 'react-native-popup-menu';

function initalizeDatabase() {
    const tasks = ["one", "two", "three"];
    TodoService.saveMultiple(tasks);
}

function clearDatabase() {
    TodoService.deleteAll();
}

beforeAll(() => {
    return initalizeDatabase();
});


afterAll(() => {
    return clearDatabase();
})

describe('Realm Tasks', () => {
    test('Todo list exists', () => {
        const todoList = TodoService.findall();
        expect(todoList).toBeTruthy();
    });

    test('Task one exists', () => {
        const id = 1;
        const todo = TodoService.findById(id);
        expect(todo.task).toBe("one");
    })

    test('Task updates', () => {
        const id = 1;
        const todo = TodoService.findById(id);
        TodoService.update(() => {
            todo.task = "one updated";
        })
        expect(todo.task).toBe("one updated");
    })

    test('Task is deleted', () => {
        const id = 1;
        const todo = TodoService.findById(id);
        TodoService.delete(todo);
        const todoDeleted = TodoService.findById(id);
        expect(todoDeleted).toBeFalsy();
    })
});

describe('Component renders correctly', () => {

    it('AddTodo', () => {
        const instance = renderer.create(
            <AddTodo />);
        expect(instance.toJSON()).toMatchSnapshot();
    });

    it('CheckBox', () => {
        const todo = TodoService.findById(2);
        const instance = renderer.create(
            <CheckBox
                data={todo}
            />);
        expect(instance.toJSON()).toMatchSnapshot();
    });

    it('Todo List Item', () => {
        const todo = TodoService.findById(2);
        const instance = renderer.create(
            //Menu Component inside TodoListItem requires a MenuProvider as root component
            <MenuProvider>
                <TodoListItem
                    todo={todo}
                />
            </MenuProvider>
        );
        expect(instance.toJSON()).toMatchSnapshot();
    });
})
