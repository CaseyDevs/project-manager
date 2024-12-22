import Button from "./Button.jsx";

export default function Sidebar(){
    return (
        <aside className="sidebar px-10 py-20 w-1/4 flex-initial flex-col rounded-r-2xl bg-black text-white">
            <h2 className="font-medium text-2xl">YOUR PROJECTS</h2>
            <p>
                <Button>+ Add Project</Button>
            </p>
            <ul className="">
                <li className="my-2 p-2 bg-stone-900 text-white rounded">Project Example 1</li>
                <li className="my-2 p-2 text-white">Project Example 1</li>

            </ul>
        </aside>
    )
}