
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center  my-3">Todos List</h3>
       {props.todo.map((x)=>{
        return(
          <Todo t={x}/>
        )
       })}
    </div>
  );
};

export default Todos;
