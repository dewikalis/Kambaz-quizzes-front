import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { Button, ListGroup } from "react-bootstrap";

export default function TodoItem({
  todo,
}: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();
  return (
    <ListGroup.Item key={todo.id}>
      <Button
        variant="danger"
        className="float-end"
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
      >
        Delete{" "}
      </Button>
      <Button
        className="float-end"
        onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
      >
        {" "}
        Edit{" "}
      </Button>
      {todo.title}
    </ListGroup.Item>
  );
}
