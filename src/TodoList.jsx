// import './App.jsx'

const TodoItem = ({ todo }) => <div>{todo.title}</div>;

const TodoList = ({ todos }) => (
    
    <div>
      {todos.map((t, i) => (
        <TodoItem key={t} todo={i} />
      ))}
    </div>
  );

export default TodoList