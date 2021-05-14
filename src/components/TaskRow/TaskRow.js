import "./TaskRow.css";
import { connect } from "react-redux";

const TaskRow = (props) => {
  return (
    <tr className="TaskRow">
      <td>
        {props.task.name}
        {/* only show check button on pending tasks */}
        {props.task.status === "pending" && (
          <button
            className="check-button"
            onClick={() => {
              props.changeStatus(props.task.id);
            }}
          >
            &#10003;
          </button>
        )}
        {/* trash can button visible on all tasks */}
        <button
          className="bin-button"
          onClick={() => props.deleteTask(props.task.id)}
        >
          &#x1F5D1;
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeStatus: (id) => dispatch({ type: "CHANGE_STATUS", payload: id }),
    deleteTask: (id) => dispatch({ type: "DELETE_TASK", payload: id }),
  };
};

export default connect(null, mapDispatchToProps)(TaskRow);
