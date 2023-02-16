//todoList={todoList} isActive={true}
function TodoList({ todoList, isActive }) {
  return (
    <div>
      <h3>{isActive === true ? "Working" : "Done"}</h3>
      {todoList
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <div key={item.id}>
              제목 : <h4>{item.title}</h4>
              내용 : <p>{item.content}</p>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
