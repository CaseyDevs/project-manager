import Button from "./Button.jsx";

export default function Sidebar( {projectList} ){
    return (
        <aside className="sidebar px-10 py-20 w-1/4 flex-initial flex-col rounded-r-2xl bg-black text-white">
            <h2 className="font-medium text-2xl">YOUR PROJECTS</h2>
            <p>
                <Button>+ Add Project</Button>
            </p>
            <ul>
                {/* Map each existing project into list items */}
                {projectList.map((project) => 
                    <li key={project.id}>
                        <button className="my-0.5 p-2 w-full text-stone-500 rounded text-left hover:bg-stone-900">
                            {project.title}
                        </button>
                    </li>
                )}
            </ul>
        </aside>
    )
}