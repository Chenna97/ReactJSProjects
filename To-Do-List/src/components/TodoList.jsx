import React, { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
    const[inputType,setInputType]=useState("");
    const[todoList,setTodoList]=useState([{id:1,text:"Learn RactJS"},
        {id:2,text:"Go to GYM"}]);
    let addTodo=()=>{
       // let arr=[1,2,3];
     // use spread operator tpo spread values
    //  let arr1=[...arr,1,2,parseInt(inputType)];
    //  console.log(arr1);
     //spread the existing list and add new one
     setTodoList([...todoList,{id:todoList.length+1,text:inputType}]);
     console.log(todoList);
        alert('Hi');
    };
    
    let deleteTodo=(id)=>{
        //remove the item having this id -remaining items will be there
    let updatedList =todoList.filter(todo=>todo.id!=id);
    setTodoList(updatedList);
    };
  return (
    <div className='todocontainer'>
      <input type="text" name="todo" id="todo" 
      value={inputType} onChange={(e)=> setInputType(e.target.value)}/>

      <button onClick={()=>addTodo()}>AddTodo</button>
      <div>
        <ul className='mylist'>
         {
                todoList.map((todo =>
                    
                    <li key={todo.id}>{todo.text}
                    <button onClick={()=>deleteTodo(todo.id)}>Completed</button>
                    </li>
                
                )
            )
            }
            
        </ul>
      </div>
      
    </div>
  )
}

export default TodoList
