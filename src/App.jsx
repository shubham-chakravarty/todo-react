import { useEffect, useState } from "react"
import classes from "./styles.module.css";
import TodoItem from "./components/todo-item.jsx";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);

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

  // console.log(todoList.length);

  if (loading)
    return <p>Data Loading...</p>

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Simple todo app</h1>
      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0 ?
          todoList.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />
          }) :
          <p>No data to display</p>
        }
        </div>
    </div>
  )
}

export default App
