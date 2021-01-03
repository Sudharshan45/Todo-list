import React from 'react'
import Todo from "./Todo"
function TodoList({todos,setTodos,filteredTodos}) {
    
    return (
        <div>
        <div className="todo-container">
      <ul className="todo-list">
      {filteredTodos.map(todo=>(
         <Todo 
         text={todo.text} 
         setTodos={setTodos} 
         todo={todo} todos={todos} 
         key={todo.id}/> 
      ))}
      </ul>
    </div>
        </div>
    )
}

export default TodoList
