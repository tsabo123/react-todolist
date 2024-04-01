import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: "my first task", completed: false },
    { task: "my second task", completed: true }
  ]);
  const [editIndex, setEditIndex] = useState(-1); 
  const [editValue, setEditValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const task = event.target.task.value.trim();
    if (!task) {
      alert("Please provide a valid task");
      return;
    }

    setTodos([...todos, { task: task, completed: false }]);
    event.target.reset();
  }

  function changeTaskStatus(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function deleteTask(index){
    let newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos (newTodos)
}

  function handleEdit(index) {
    setEditIndex(index);
    setEditValue(todos[index].task);
  }

  function handleSave(index) {
    const newTodos = [...todos];
    newTodos[index].task = editValue.trim();
    setTodos(newTodos);
    setEditIndex(-1); 
    setEditValue("");
  }

  return (
    <div className="container my-5">
      <div
        className="mx-auto rounded border p-4"
        style={{ width: "600px", backgroundColor: "#08618d" }}
      >
        <h2 className="text-white text-center mb-5">My Todo List</h2>

        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            placeholder="New Task"
            name="task"
          />
          <button className="btn btn-outline-light" type="submit">
            Add
          </button>
        </form>
              
        {todos.map((todo, index) => (
              
           


          <div
            key={index}
            className="rounded mt-4 p-2 d-flex"
            style={{
              backgroundColor: todo.completed ? "#87FC68" : "LightGray"
            }}
          >
            <div className="me-auto d-flex">


            <div>
                <i
                className={"h5 me-2 "+ (todo.completed ? "bi bi-check-square" : "bi bi-square")
                  
                }
                style={{ cursor: "pointer" }}
                onClick={() => changeTaskStatus(index)}
              ></i>
               </div>
              {index === editIndex ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                todo.task
              )}
            </div>
            <div>
              
              {index === editIndex ? (
                <i
                  className="bi bi-check2 text-success h5 "
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSave(index)}
                ></i>
              ) : (
                <i
                  className="bi bi-pencil-fill text-success h5"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEdit(index)}
                ></i>
              )}
              <i
                className="bi bi-trash3 text-danger h5 ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => deleteTask(index)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
