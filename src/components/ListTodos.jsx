import React from "react";
//Listeleme yapabilmek icin store a subscribe olmamiz gerek. Bunun icin useSelector kullanacagiz
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const ListTodos = () => {

  //Subscribe olduktan sonra statimize ulasiyoruz ve todolarimizi asagidaki gibi mapliyoruz
  const uygulamaState = useSelector((state) => state);

  return (
    <div>
      {uygulamaState.todosState.todos.length === 0 && (
        <>
          <p>Henuz gecerli bir todo yoktur</p>
        </>
      )}
      {uygulamaState.todosState.todos.length > 0 && (
        <>
          {uygulamaState.todosState.todos.map((todo) => (
           <SingleTodo todo={todo} key={todo.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListTodos;
