import Button from "./Button.jsx";

const SideBar = ({ startAddProject, projects }) => {
  console.log(projects);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 ">
        Your Project
      </h2>

      <div>
        <Button onClick={startAddProject}>Create Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-2 text-sm rounded-md text-stone-400 hover:bg-stone-700 hover:text-stone-200">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
