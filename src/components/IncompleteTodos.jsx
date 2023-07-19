import { useEffect, useState } from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDel, children } = props;

  return (
    <div className="todo-unt -in-cpl utl-mt-10 utl-px-25 utl-py-15">
      <p className="todo-unt_b-cpy">未完了のTODO</p>

      <ul className="todo-lst -in-cpl js-in-cpl-lst">
        {incompleteTodos.map((todo, i) => {
          return (
            <li className="todo-lst_itm" key={todo}>
              <p className="todo-lst_b-cpy">{todo}</p>
              <button
                className="todo-lst_btn -cpl utl-ovr"
                onClick={() => onClickComplete(i)}
              >
                完了
              </button>
              <button
                className="todo-lst_btn -del utl-ovr"
                onClick={() => onClickDel(i)}
              >
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
