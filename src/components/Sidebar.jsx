import Button from "./Button.jsx";
import { useState } from "react"

export default function Sidebar({ projectList, onHandleStartAddProject, onSelectedProject, selectedProjectId }){
    return (
        <aside className="sidebar px-10 py-20 w-1/4 flex-initial flex-col rounded-r-2xl bg-black text-white">
            <h2 className="font-medium text-2xl">YOUR PROJECTS</h2>
            <p>
                <Button onClick={onHandleStartAddProject}>+ Add Project</Button>
            </p>
            <ul>
                {/* Map each existing project into list items */}
                {projectList.map((project) => {

                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                    
                    // Set active class on the sele
                    if (project.id === selectedProjectId) {
                        cssClasses += " bg-stone-800 text-stone-200"
                    } else {
                        cssClasses += " text-stone-400"
                    }

                    return (
                    <li key={project.id}>
                        <button 
                            className={cssClasses}
                            onClick={() => onSelectedProject(project.id)}
                        >
                            {project.title}
                            
                        </button>
                    </li>
                    );
                })}
            </ul>
        </aside>
    )
}