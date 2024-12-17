import Tasks from "./tasks/Tasks";

const SelectedProject = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const formattedStartDate = new Date(project.startDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  const formattedDueDate = new Date(project.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            Title: {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="bg-red-800 text-white px-5 py-2 rounded-md hover:bg-red-500 hover:text-white"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">Start Date: {formattedStartDate}</p>
        <p className="mb-4 text-stone-400">Due Date: {formattedDueDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          Description: {project.description}
        </p>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
};

export default SelectedProject;
