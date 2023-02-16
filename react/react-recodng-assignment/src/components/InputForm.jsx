import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function InputForm({ setTodoList }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      title,
      content,
      isDone: false,
      id: uuidv4(),
    };

    setTodoList((prev) => {
      return [...prev, newTodo];
    });

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={addHandler}>
        제목 : <input type="text" onChange={onChangeTitle} value={title} />
        내용 : <input type="text" onChange={onChangeContent} value={content} />
        <button>추가하기</button>
      </form>
    </div>
  );
}

export default InputForm;
