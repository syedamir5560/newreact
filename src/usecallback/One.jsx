import { memo } from "react";

const One = ({ todos, addTodos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodos}>Add Todo</button>
    </>
  );
};

export default memo(One);