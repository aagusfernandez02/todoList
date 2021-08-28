import { useState, useEffect } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  //Effects

  useEffect(() => {
    if( isDarkMode ){
      document.documentElement.style.setProperty('--primary', '#141414');
      document.documentElement.style.setProperty('--secondary', '#4c4747');
      document.documentElement.style.setProperty('--terciary', '#7c1c10');
      document.documentElement.style.setProperty('--green', '#0ca37d');

    } else {
      document.documentElement.style.setProperty('--primary', '#f6d365');
      document.documentElement.style.setProperty('--secondary', '#fda085');
      document.documentElement.style.setProperty('--terciary', '#ff6f47');
      document.documentElement.style.setProperty('--green', '#0bd4a2');
    }
  }, [isDarkMode]);

  useEffect(()=>{
    getLocalTodos();
  },[]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos,status]);


  //Functions
  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed===true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //LocalStorage
  const saveLocalTodos = ()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  };

  const getLocalTodos = ()=>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <i className={`fas fa-moon mode light`} onClick={()=>{setIsDarkMode(!isDarkMode)}}></i>
      <header>
        <h1>Lista de tareas</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos}
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
