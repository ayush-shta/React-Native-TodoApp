import Realm from 'realm';

import Todo from '../schema/todo';
import RealmUtils from '../utils';

const realmInstance = new Realm({ schema: [Todo] });
const SCHEMA_TODO = 'Todo';


const TodoService = {
    findall() {
        return realmInstance.objects(SCHEMA_TODO).sorted('id');
    },

    findById(id) {
        return realmInstance.objectForPrimaryKey(SCHEMA_TODO, id);
    },

    save(newTask) {
        const todoList = realmInstance.objects(SCHEMA_TODO);
        const maxId = RealmUtils.getMaxIdForPrimaryKey(todoList);
        realmInstance.write(() => {
            realmInstance.create(SCHEMA_TODO, { id: maxId + 1, task: newTask });
        })
        return todoList;
    },

    saveMultiple(tasks) {
        tasks.map(task => {
            this.save(task);
        });
    },

    update(callback) {
        realmInstance.write(() => {
            callback();
        });
    },

    delete(todo) {
        realmInstance.write(() => {
            realmInstance.delete(todo);
        });
    },

    deleteAll() {
        realmInstance.write(() => {
            realmInstance.deleteModel(SCHEMA_TODO);
        })
    }

}

export default TodoService;