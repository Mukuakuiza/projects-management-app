import Input from "./Input.jsx";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="bg-stone-900 text-white px-7 py-2 rounded-md hover:bg-stone-600 hover:text-white">
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
        <Input label="Title" />
        <Input label="Start Date" />
        <Input label="Due Date" />
        <Input label="Description" isTextarea />
      </div>
    </div>
  );
};

export default NewProject;
