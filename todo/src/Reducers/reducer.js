export function reducer(state, action) {
    switch (action.type) {
      case 'ADD':
        return { todos: [...state.todos, {item: action.payload, completed: false, id: Date.now()}] }
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