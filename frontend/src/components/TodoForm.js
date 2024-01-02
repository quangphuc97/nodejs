import { useState } from "react";
function TodoForm({ type, callbackSuccess }) {
  const [form, setForm] = useState({});
  const onChangeForm = (e) => {
    let target = e.target;
    let key = target.name;
    let value = target.value;
    setForm({
      ...form,
      [key]: value,
    });
  };

  const createTodo = () => {
    //const urlCreateTodo = process.env?.URL_BACKEND + "/api/todo";
    const urlCreateTodo = 'http://localhost:3000/api/todo';
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    };
    fetch(urlCreateTodo, requestOptions)
      .then((response) => response.json())
      .then((data) => callbackSuccess)
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form id="form-to-do">
        {type == "create" && <h2>Create Todo</h2>}
        {type == "edit" && <h2>Edit Todo</h2>}
        <div>
          <div>
            <label>Title</label>
            <input type="text" value={form?.title} name="title" onChange={onChangeForm} />
          </div>
          <div>
            <label>Description</label>
            <input type="text" value={form?.description} name="description"  onChange={onChangeForm}/>
          </div>
          <div>
            <label>Start Time</label>
            <input type="date" value={form?.start_time} name="start_time"  onChange={onChangeForm}/>
          </div>
          <div>
            <label>End Time</label>
            <input type="date" value={form?.end_time} name="end_time"  onChange={onChangeForm} />
          </div>
          {type == "create" && (
            <input type="button" value="Add" onClick={createTodo} />
          )}
          {type == "edit" && <input type="button" value="Edit" />}
        </div>
      </form>
    </div>
  );
}
export default TodoForm;
