import Input from "./Input.jsx";
import { useRef } from "react";
const NewProject = ({ onAdd }) => {
  const titleRef = useRef();
  const startDateRef = useRef();
  const dueDateRef = useRef();
  const descriptionRef = useRef();

  const handleSaveInput = () => {
    const enteredTitle = titleRef.current.value;
    const enteredStartDate = startDateRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    onAdd({
      title: enteredTitle,
      startDate: enteredStartDate,
      dueDate: enteredDueDate,
      description: enteredDescription,
    });
  };

  return (
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
          <button className="bg-red-800 text-white px-5 py-2 rounded-md hover:bg-red-500 hover:text-white">
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
  );
};

export default NewProject;
