// import logo from './logo.svg';
// import { render } from '@testing-library/react';
import './App.css';
import Header from "./myComponents/Header";
import {Footer} from "./myComponents/Footer";
import {Todos} from "./myComponents/Todos";
import {AddTodo} from "./myComponents/AddTodo";
import React, { useState, useEffect} from 'react';
import { About } from './myComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am on delete of todo ", todo);
    // document.write("Hello World!");
    setTodos(todos.filter((e)=> {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=> {
    console.log("I am adding this Todo", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      let sno = todos[todos.length-1].Sno + 1;  
    }
    const myTodo= {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
      <Header title="My Todos List" searchBar={false}/>

      <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">

            <About />
          </Route>
        </Switch>

      <Footer/>
    </Router>
    </>
  );
}

export default App;
