import { useEffect, useState } from "react"
import classes from "./styles.module.css";
import TodoItem from "./components/todo-item.jsx";
import TodoDetails from "./components/todo-details/index.jsx";
import { Skeleton } from "@mui/material";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchListofTodos = (todo) => {
    // console.log(todo);
    fetchSingleToDo(todo?.id);
  }

  useEffect(() => {
    fetchToDo();
  }, []);

  const fetchToDo = async () => {
    setLoading(true);

    try {
      const res = await fetch('https://dummyjson.com/todos');
      const json = await res.json();
      if (json?.todos && json?.todos?.length > 0)
        setTodoList(json.todos);
    } catch (error) {
      console.log('Error ocurred');

    }

    setLoading(false);
  }

  const fetchSingleToDo = async (id) => {
    try {
      const res = await fetch(`https://dummyjson.com/todos/${id}`);
      const json = await res.json();
      if (json) {
        setTodoDetails(json);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (error) {
      console.log('Error ocurred');
    }
  }

  // console.log(todoList.length);

  if (loading)
    return <Skeleton variant="circular" width={650} height={650}/>

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Simple todo app</h1>
      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0 ?
          todoList.map(todo => {
            return <TodoItem key={todo.id} todo={todo} clickFunction={fetchListofTodos} />
          }) :
          <p>No data to display</p>
        }
      </div>
      <TodoDetails todoDetails={todoDetails} openDialog={openDialog} setOpenDialog={setOpenDialog} setTodoDetails={setTodoDetails} />
    </div>
  )
}

export default App
