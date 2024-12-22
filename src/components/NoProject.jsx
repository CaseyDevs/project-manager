import Button from "./Button.jsx";

const noProjectImg = './src/assets/no-projects.png'

export default function NoProject () {
    return (
        <div className="text-center mt-24 w-2/3">
            <img
                src={noProjectImg}
                alt="No project selected img"
                className="h-16 w-16 contain-content mx-auto"
            />
            <h2 className="text-xl font-bold text-stone-500 my-4">No project selected</h2>
            <p className="text-stone-400">Select a project or get started with a new one.</p>
            <p className="mt-8">
                <Button>Create a new project</Button>
            </p>

        </div>
    )
}