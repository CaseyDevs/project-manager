import { useState } from "react";
import Sidebar from './components/Sidebar';
import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProject.jsx";

function App() {

    const [projectState, setProjectState] = useState({
        selectedProjectID: undefined,  // Store selected projects ID
        projects: []  // Array of the created projects
    });

    function handleStartAddProject (){
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectID: null,
            };
        });
    }

    let content;

    if (projectState.selectedProjectID === null) {
        content = <NewProject />
    } else if (projectState.selectedProjectID === undefined) {
        content = <NoProject onStartAddProject={handleStartAddProject}/>
    }

    return (
    <>
        <main className="h-screen my-8 flex gap-8">
            <Sidebar />
            {content}
        </main>
    </>
  );
}

export default App;
