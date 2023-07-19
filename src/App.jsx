import { useEffect, useState } from "react";

import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  console.log("first console");

  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const [incompleteTodos, setIncompleteTodos] = useState([
    "hogehoge",
    "fugafuga"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "piyopiyo",
    "pochapocha"
  ]);

  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodos = [...incompleteTodos, todoText];

    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDel = (i) => {
    const newTodos = [...incompleteTodos];

    newTodos.splice(i, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (i) => {
    const newIncompleteTodos = [...incompleteTodos];

    newIncompleteTodos.splice(i, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[i]];
    setCompleteTodos(newCompleteTodos);
  };
  const onClickIncomplete = (i) => {
    const newCompleteTodos = [...completeTodos];

    newCompleteTodos.splice(i, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <main className="mn-cnt">
      <div className="mn-cnt_bdy">
        <InputTodo
          todoText={todoText}
          onChange={onChangeTodoText}
          onClick={onClickAdd}
          disabled={incompleteTodos.length >= 5}
        ></InputTodo>

        {incompleteTodos.length >= 5 && (
          <p className="utl-mt-10 utl-col-red01 utl-tac">TODO登録上限 ： 5個</p>
        )}

        <IncompleteTodos
          incompleteTodos={incompleteTodos}
          onClickComplete={onClickComplete}
          onClickDel={onClickDel}
        ></IncompleteTodos>

        <CompleteTodos
          completeTodos={completeTodos}
          onClickIncomplete={onClickIncomplete}
        ></CompleteTodos>
      </div>
    </main>
  );
};
