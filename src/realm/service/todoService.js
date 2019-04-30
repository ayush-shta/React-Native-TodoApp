import Realm from 'realm';

import Todo from '../schema/todo';
import RealmUtils from '../utils';

const realmInstance = new Realm({ schema: [Todo] });


const TodoService = {
    findall() {
        return realmInstance.objects('Todo').sorted('id');
    },

    save(newTask) {
        const todoList = realmInstance.objects('Todo');
        const maxId = RealmUtils.getMaxIdForPrimaryKey(todoList);

        console.log("max" + maxId);

        realmInstance.write(() => {
            realmInstance.create('Todo', { id: maxId + 1, task: newTask });
        })
        return todoList;
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
    }

}

export default TodoService;