function TodoList({ todoList }) {
  const convertDate = (dateStr) => {
    let date = new Date(dateStr);
    return date.toLocaleDateString();
  };
  return (
    <table id="todos">
      <thead>
        <tr>
          <th>Tittle</th>
          <th>Description</th>
          <th>Start time</th>
          <th>End time</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todoList?.map((todo) => (
          <tr role="row" key={todo._id}>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>{convertDate(todo.start_time)}</td>
            <td>{convertDate(todo.end_time)}</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TodoList;
