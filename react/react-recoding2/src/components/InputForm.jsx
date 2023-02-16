import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function InputForm(todoList, setTodoList) {
  // 2가지 기능
  // change이벤트 발생할때 값을 넣어줄 함수
  // 실제로 add할 것
  const [newTodo, setNewTodo] = useState(initianNewTodo);
  const initianNewTodo = {
    id: uuidv4(),
    title: "test",
    content: "test",
    isDone: false,
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodoList([...todoList, ...newTodo]);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      제목
      <input
        type="text"
        onChange={onChangeHandler}
        value={newTodo.title}
        name="title"
      />
      내용
      <input
        type="text"
        onChange={onChangeHandler}
        value={newTodo.content}
        name="content"
      />
      <button>추가</button>
    </form>
  );
}

export default InputForm;
