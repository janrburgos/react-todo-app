import "./TaskTable.css";
import TaskRow from "../TaskRow/TaskRow";
import { connect } from "react-redux";

const TaskTable = (props) => {
  return props.tasks.filter((task) => task.status === props.status).length ===
    0 ? (
    // if no tasks in this table, show this message
    <div className="TaskTable">
      <div>
        <span>no {props.status} tasks</span>
      </div>
    </div>
  ) : (
    // if there is a task in this table, show tasks
    <table className="TaskTable">
      <thead>
        <tr>
          <th>{`${props.status} tasks`}</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks
          .filter((task) => task.status === props.status)
          .map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
      </tbody>
    </table>
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
    deleteTask: (id) => dispatch({ type: "DELETE_TASK", payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);
