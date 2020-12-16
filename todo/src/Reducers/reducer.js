export function reducer(state, action) {
    switch (action.type) {
      case 'COMPLETE':
        return { completed: true }
      default:
        return state
    }
}
export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]