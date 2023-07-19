import { useEffect, useState } from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled, children } = props;

  return (
    <div className="srch-unt utl-px-20 utl-py-15">
      {disabled}
      <input
        className="srch-unt_inpt js-add-txt"
        placeholder="TODOを入力"
        value={todoText}
        disabled={disabled}
        onChange={onChange}
      />
      <button
        className="srch-unt_btn utl-ovr js-add-btn"
        disabled={disabled}
        onClick={onClick}
      >
        追加
      </button>
    </div>
  );
};
