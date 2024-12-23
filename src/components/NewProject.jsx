import Input from "./Input.jsx";
import { useRef } from "react";

// TODO:
// GET USER INPUT WITH REFS
// ADD BUTTON FUNCTIONALITY

export default function NewProject({onAdd}) {

    // User input refs
    const titleRef = useRef();
    const desriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        // Get project data from forwarded refs
        const projectTitle = titleRef.current.value;
        const projectDescription = desriptionRef.current.value;
        const projectDueDate = dueDateRef.current.value;

        // Data validation: Expect the new project object to contain the following fields
        onAdd({
            title: projectTitle,
            description: projectDescription,
            dueDate: projectDueDate,
        });
    }

    return (
        <>
            <div className="w-2/3 mt-24 text-right">
                <menu className="mb-10">
                    <button className="px-8 py-3">Cancel</button>
                    <button onClick={handleSave} className="px-8 py-3 text-white bg-black rounded-xl">Save</button>
                </menu>

                {/*  Custom input components */}
                <div className="flex-col">
                    <Input typle="text" labelText="Title" ref={titleRef}/>
                    <Input labelText="Description" textarea ref={desriptionRef}/>
                    <Input type="date" labelText="Due Date" ref={dueDateRef}/>
                </div>
            </div>
        </>
    )
}