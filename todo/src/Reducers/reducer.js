export function reducer(state, action) {
    console.log(action.payload);
    switch (action.type) {
      case 'ADD':
        return { todos: [...state.todos, {item: action.payload, completed: false, id: Date.now()}] }
      case 'COMPLETE':
        return { todos: state.todos.map((todo) => {
            if(todo.id !== action.payload) return todo;
            else{
                todo.completed = true;
                return todo;
            }
        })}
      case 'UNCOMPLETE':
        return { todos: state.todos.map((todo) => {
            if(todo.id !== action.payload) return todo;
            else{
                todo.completed = false;
                return todo;
            }
        })}
      default:
        return state
    }
}
export const initialState = {
    todos:[{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }]
}