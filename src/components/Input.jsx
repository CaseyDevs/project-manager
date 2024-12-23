import { forwardRef } from "react"

const Input = forwardRef(function Input({ labelText, textarea, ...props }, ref) {

    const inputClasses = "block px-2 py-2 w-full bg-stone-300 outline-0 rounded-sm mb-4 border-b-2 border-stone-400"

    return (
        <>
            <label className="block text-left font-bold text-stone-600" >{labelText}</label>
            {textarea ? <textarea ref={ref} className={inputClasses} {...props}  /> :
                <input ref={ref} className={inputClasses} {...props}
            />}
        </>
    )
})

export default Input;