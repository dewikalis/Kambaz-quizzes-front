import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { ListGroup, Button, FormControl } from "react-bootstrap";

export default function TodoForm(
) {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroup.Item className="d-flex">
      <FormControl
        defaultValue={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
      <Button variant="warning" onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"> Update </Button>
      <Button variant="success" onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"> Add </Button>
    </ListGroup.Item>
  );
}
