import './App.css'
import './TodoList.jsx'
import './TodoForm.jsx'
import '/Users/aitannaparker/Documents/GitHub/todo-list/src/TodoList.jsx'


function TodoForm(){

  return (
    <form >
          <input className='user_input' type="text"/>
          <button type="submit">Add new todo</button>
         
     </form>

  )
}

function App() {
  const todos = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"},
]



  return (
    <div>
    
      
      <h1>My Todos</h1>
      <h2> Todo</h2> <TodoForm/>
     
      { todos.map((d) => <li key={d.title}>{d.title}</li>) }



    </div>
  )
}

export default App