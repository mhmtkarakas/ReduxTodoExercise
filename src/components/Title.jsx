import React from 'react'
import { useSelector } from 'react-redux'

const Title = () => {
    const uygulamaninState = useSelector(state=>state)
  return (
    <div>
      <h1>TODO APP</h1>
      <h4>Kayitli Todo Sayisi:{uygulamaninState.todosState.todos.length}</h4>
      <h4>Yapilanlar:{uygulamaninState.todosState.todos.filter(todo=>todo.isDone===true).length}     Yapilmayanlar:{uygulamaninState.todosState.todos.filter(todo=>todo.isDone===false).length} </h4>
    </div>
  )
}

export default Title
