import Input from "./Input.jsx";

export default function NewProject() {
    return (
        <>
            <form className="mt-24 text-right w-1/2">
                <div className="mb-10">
                    <button className="px-8 py-3">Cancel</button>
                    <button className="px-8 py-3 text-white bg-black rounded-xl">Save</button>
                </div>
                {/* Add custom input components here */}
                <div className="flex-col">
                    <Input labelText="Title" type="text"/>
                    <Input labelText="Description" type="text"/>
                    <Input labelText="Due Date" type="date"/>
                </div>
            </form>
        </>
    )
}