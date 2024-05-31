import React from "react";
import { useState, useEffect, useRef } from "react";
import Tasks from "./Tasks";

function Inputs() {
  const [todo, setTodo] = useState({});
  const [list, setList] = useState([]);
  const input = useRef();

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("array"));
    if (!todos) {
      localStorage.setItem("array", JSON.stringify([]));
    } else {
      setList(todos);
    }
  }, []);

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("array"));
    if (list != []) {
      let anlikListe = JSON.stringify(list);
      todos = localStorage.setItem("array", anlikListe);
    }
  }, [list]);

  function getInputValue(e) {
    setTodo({
      text: e.target.value,
      isCompleted: false,
    });
    if (e.key === "Enter") {
      pushList();
    }
  }

  function pushList() {
    setList([...list, todo]);
    input.current.value = "";
  }

  return (
    <div className="todo-wrapper container mt-3">
      <h1 className="text-center">Yapılacaklarınızı Ekleyebilirsiniz</h1>
      <div className="input-group my-3 gap-2">
        <input
          type="text"
          placeholder="Todo giriniz..."
          className="input form-control bg-transparent rounded"
          ref={input}
          onKeyUp={getInputValue}
        />
        <button className="btn rounded add-todo" onClick={pushList}>
          Todo ekle
        </button>
      </div>

      <Tasks list={list} setList={setList} />
    </div>
  );
}

export default Inputs;
