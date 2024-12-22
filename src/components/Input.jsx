export default function Input({ labelText, textarea, ...props }) {

    const inputClasses = "block px-2 py-2 w-full bg-stone-300 outline-0 rounded-sm mb-4 border-b-2 border-stone-400"

    return (
        <>
            <label className="block text-left font-bold text-stone-600" >{labelText}</label>
            {textarea ? <textarea {...props} className={inputClasses} /> :
                <input {...props} className={inputClasses}
            />}
        </>
    )
}