import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [
    { id: uuidv4(), name: "eat", status: "pending" },
    { id: uuidv4(), name: "code", status: "pending" },
    { id: uuidv4(), name: "sleep", status: "done" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PENDING_TASK":
      let newArray = [...state.tasks];
      newArray.push({ id: uuidv4(), name: action.payload, status: "pending" });
      return {
        ...state,
        tasks: [...newArray],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
      };
    case "CHANGE_STATUS":
      let doneTask = state.tasks.find((task) => task.id === action.payload);
      doneTask.status = "done";
      let editedArray = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      editedArray.push(doneTask);
      return {
        ...state,
        tasks: [...editedArray],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
