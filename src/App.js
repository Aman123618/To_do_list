import logo from "./logo.svg";
import "./App.css";

import Header from "./Mycomponents/Header";
import Todo from "./Mycomponents/Todo";
import Todos from "./Mycomponents/Todos";
import Footer from "./Mycomponents/Footer";

function App() {
  let todo = [
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
  ];
  return (
    <>
      <Header title="My Todos list" />
     
      <Todos todo={todo} />
      <Footer />
    </>
  );
}

export default App;
