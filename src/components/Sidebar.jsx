export default function Sidebar(){
    return (
        <div className="sidebar px-10 py-20 w-1/4 flex-initial flex-col rounded-r-2xl bg-black text-white">
            <h2 className="font-medium text-2xl">YOUR PROJECTS</h2>
            <button className="my-8 px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>
            <ul className="">
                <li className="my-2 p-2 bg-stone-900 text-white rounded">Project Example 1</li>
                <li className="my-2 p-2 text-white">Project Example 1</li>

            </ul>
        </div>
    )
}