import React from 'react'

function Form({setInputText,setTodos,todos,inputText,setStatus}) {
    //here i can write javascript code and function
    const inputTextHandler=(e)=>{
     
        setInputText(e.target.value);
    }
    const submitTodoHandler=(e)=>{
     
        e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false,id:Math.random()*1000}])
      setInputText("");
    }
    const statusHandler=(e)=>{
    setStatus(e.target.value);
   
    }
    return (
        <div>
    <form>
      <input value={inputText} type="text"className="todo-input" onChange={e=>inputTextHandler(e)} />
      <button className="todo-button" type="submit" onClick={e=>submitTodoHandler(e)}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
        </div>
    )
}

export default Form
