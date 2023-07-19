import { useEffect, useState } from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickIncomplete, children } = props;

  return (
    <div className="todo-unt -cpl utl-mt-10 utl-px-25 utl-py-15">
      <p className="todo-unt_b-cpy">完了したTODO</p>

      <ul className="todo-lst -cpl js-cpl-lst">
        {completeTodos.map((todo, i) => {
          return (
            <li className="todo-lst_itm" key={todo}>
              <p className="todo-lst_b-cpy">{todo}</p>
              <button
                className="todo-lst_btn -bak utl-ovr"
                onClick={() => onClickIncomplete(i)}
              >
                戻す
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
