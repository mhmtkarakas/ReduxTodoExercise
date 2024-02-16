import React from 'react'

//Listeleme yapabilmek icin stora subscribe olmamiz gerek. Bunun icin useSelector kullanacagiz

import { useSelector } from 'react-redux'

const ListTodos = () => {
  //Subscribe olduktan sonra statimize ulasiyoruz ve todolarimizi asagidaki gibi mapliyoruz
  const uygulamaState = useSelector(state=>state)
  
  return (
    <div>
     {
      uygulamaState.todosState.todos.length === 0 && (
        <>
        <p>Henuz gecerli bir todo yoktur</p>
        </>
      )
     }
     {
      uygulamaState.todosState.todos.length>0 && (
        <>
        {
          uygulamaState.todosState.todos.map((todo)=>(
            <h1>{todo.text}</h1>
          ))
        }
        </>
      )
     }
    </div>
  )
}

export default ListTodos
