import React, { useState } from "react";
import "./TodoAppInput.css";
import { connect } from "react-redux";

const TodoAppInput = ({ tasks, addPendingTask }) => {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addTaskInput = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = () => {
    let inputTask = input.trim().toLowerCase();
    setErrorMessage("");
    document.querySelector("input").focus();

    if (inputTask === "") {
      setErrorMessage("please input a valid task");
      return setInput("");
    } else if (tasks.find((task) => task.name === inputTask) !== undefined) {
      return setErrorMessage("this task is already existing");
    }

    setInput("");
    addPendingTask(inputTask);
  };

  return (
    <div className="TodoAppInput">
      <div className="app-heading">
        <p>New Task</p>
      </div>
      <div className="app-body">
        <label htmlFor="text">Task Name</label>

        {/* Input box */}
        <input
          onChange={addTaskInput}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              submitHandler();
            }
          }}
          type="text"
          id="text"
          value={input}
        />

        {/* Place for error message */}
        <div className="error-message">{errorMessage}</div>

        {/* Add task button */}
        <button
          onClick={() => {
            submitHandler();
          }}
        >
          + Add Task
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ tasks }) => {
  return {
    tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPendingTask: (input) =>
      dispatch({ type: "ADD_PENDING_TASK", payload: input }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAppInput);
