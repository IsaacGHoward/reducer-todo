import logo from './logo.svg';
import './App.css';
import {useReducer} from 'react';
import {reducer, initialState} from './Reducers/reducer';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
function App() {
  const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <div className="App">
      <TodoForm todos={state.todos} dispatch={dispatch}/>
      <TodoList todos={state.todos}/>
    </div>
  );
}

export default App;
