import React from "react";
import { BsTrash3Fill } from "react-icons/bs";

function Tasks({ list, setList }) {
  function deleteItem(index) {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  function checkItem(index) {
    let newList = [...list];
    if (newList[index].isCompleted) {
      newList[index].isCompleted = false;
    } else {
      newList[index].isCompleted = true;
    }
    setList(newList);
  }

  let dogru =
    "list-group-item bg-secondary-subtle d-flex justify-content-between align-items-center py-2 px-3";

  let yanlis =
    "list-group-item bg-secondary-subtle  d-flex justify-content-between align-items-center py-2 px-3";

  return (
    <>
      <ul className="list-unstyled">
        {list.map((value, index) => (
          <li key={index} className={value.isCompleted ? dogru : yanlis}>
            <input type="checkbox" className="input-check" onClick={() => checkItem(index)} />
            <span
              className={
                value.isCompleted
                  ? "text-decoration-line-through text-secondary"
                  : ""
              }
            >
              {value.text}
            </span>
            <BsTrash3Fill size={24} onClick={() => deleteItem(index)} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tasks;
