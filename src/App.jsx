import { useState } from "react";
import Sidebar from './components/Sidebar';
import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProject.jsx";

function App() {

    // Manage project state
    const [projectState, setProjectState] = useState({
        projects: [],  // Array of the created projects
        selectedProjectID: undefined,  // Store selected projects ID
    });

    // Handle adding project
    function handleStartAddProject (){
        // Use prev state to keep track of old projects
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectID: null,  // Update project ID
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectState(prevState => {
            // New project object
            const projectID = Math.random(); // Generate a unique id for each project (simple approach for dummy proj)
            const newProject = {
                ...projectData,
                id: projectID,    
            }

            // Add new project to projects array
            return {
                ...prevState,
                selectedProjectID: undefined, // Change to project ID when we handle add project
                projects: [...prevState.projects, newProject], 
            };
        });
    }


    let content;

    // If project ID present, create New Project
    if (projectState.selectedProjectID === null) {
        content = <NewProject onAdd={handleAddProject} />
    // If no project ID, show No Project selected page
    } else if (projectState.selectedProjectID === undefined) {
        content = <NoProject onStartAddProject={handleStartAddProject}/>
    }

    return (
    <>
        <main className="h-screen my-8 flex gap-8">
            <Sidebar projectList={projectState.projects}/>
            {content}
        </main>
    </>
  );
}

export default App;
