class Todo { }
Todo.schema = {
  name: 'Todo',
  primaryKey: 'id',
  properties: {
    id: 'int',
    task: 'string',
    isCompleted: { type: 'bool', default: false, indexed: true },
    // note: 'string?',
    // category: 'string'
  },
};

export default Todo;