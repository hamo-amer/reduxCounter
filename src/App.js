import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import { decrement, increment } from './redux/actions/counterActions';


function App() {
  const count=useSelector(state=>state.counterReducer.count)
  const dispatch=useDispatch()
  return (
    <div className="App">
    <button onClick={()=>dispatch(increment(5))} >+</button>
<span>{count}</span>
    <button onClick={()=>dispatch(decrement())} >-</button>
 
    </div>
  );
}

export default App;
