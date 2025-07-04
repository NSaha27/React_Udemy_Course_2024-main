function Task({ task, onEdit, onDelete }) {
  return (
    <tr>
      <td>
        <input type="checkbox" name="selectTask" id="selectTask" className="" />
      </td>
      <td>{task}</td>
      <td>
        <button className="" onClick={onEdit}>
          Edit
        </button>
      </td>
      <td>
        <button className="" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Task;
