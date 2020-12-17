import logo from './logo.svg';
import './App.css';
import {useReducer} from 'react';
import {reducer, initialState} from './Reducers/reducer';
import TodoList from './Components/TodoList';
function App() {
  const [state, dispatch] = useReducer(reducer,initialState);
  console.log(dispatch);
  return (
    <div className="App">
      <TodoList todos={state}/>
    </div>
  );
}

export default App;
