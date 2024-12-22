import Input from "./Input.jsx";

export default function NewProject() {
    return (
        <>
            <div className="w-2/3 mt-24 text-right">
                <menu className="mb-10">
                    <button className="px-8 py-3">Cancel</button>
                    <button className="px-8 py-3 text-white bg-black rounded-xl">Save</button>
                </menu>

                {/*  Custom input components */}
                <div className="flex-col">
                    <Input labelText="Title"/>
                    <Input labelText="Description" textarea/>
                    <Input labelText="Due Date"/>
                </div>

            </div>
        </>
    )
}