import { useState, useRef } from "react";
import Button from "../Button";
import Modal from "../Modal";
const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const modal = useRef();

  const handleTaskChange = (e) => {
    setEnteredTask(e.target.value);
  };

  function handleBtn() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} btnLabel="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Sorry!...</h2>
        <p className="text-stone-600 mb-4">Do not leave field empty.</p>
        <p className="text-stone-600 mb-4">
          Make sure you provide a valid value for field.
        </p>
      </Modal>

      <div className="flex items-center gap-4">
        <input
          onChange={handleTaskChange}
          value={enteredTask}
          type="text"
          placeholder="Enter task"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200 outline-none"
        />
        <Button onClick={handleBtn}>Add Task</Button>
      </div>
    </>
  );
};

export default NewTask;
