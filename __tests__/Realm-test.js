import 'react-native';

import TodoService from '../src/realm/service/todoService'

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
