import "./App.css";

import Header from "./Mycomponents/Header";

import Todos from "./Mycomponents/Todos";
import Footer from "./Mycomponents/Footer";
import { useState } from "react";
import Addtodo from "./Mycomponents/Addtodo";

function App() {
  const ondelete = (todo) => {
    console.log("i am ondelete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "market",
      desc: "buy apple",
    },
    {
      sno: 2,
      title: "study maths",
      desc: "linear algebra",
    },
    {
      sno: 3,
      title: "chore",
      desc: "laundry",
    },
  ]);

  return (
    <>
      <Header title="My Todos list" searchbar={true} />

       <Addtodo/>

      <Todos todos={todos} onDelete={ondelete} />
      
      <Footer />
    </>
  );
}

export default App;
