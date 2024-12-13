import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";
const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const titleRef = useRef();
  const startDateRef = useRef();
  const dueDateRef = useRef();
  const descriptionRef = useRef();

  const handleSaveInput = () => {
    const enteredTitle = titleRef.current.value;
    const enteredStartDate = startDateRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    //validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredStartDate.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      startDate: enteredStartDate,
      dueDate: enteredDueDate,
      description: enteredDescription,
    });
  };

  return (
    <>
      <Modal ref={modal} btnLabel="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Sorry!.. looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={handleSaveInput}
              className="bg-stone-900 text-white px-7 py-2 rounded-md hover:bg-stone-600 hover:text-white"
            >
              Save
            </button>
          </li>
          <li>
            <button
              onClick={onCancel}
              className="bg-red-800 text-white px-5 py-2 rounded-md hover:bg-red-500 hover:text-white"
            >
              Cancel
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" ref={titleRef} />
          <Input type="date" label="Start Date" ref={startDateRef} />
          <Input type="date" label="Due Date" ref={dueDateRef} />
          <Input label="Description" isTextarea ref={descriptionRef} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
