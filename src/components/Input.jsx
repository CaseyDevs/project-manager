export default function Input({labelText, type}) {
    return (
        <>
            <label className="block text-left font-bold text-stone-600">{labelText}</label>
            <input className="block px-2 py-2 w-full bg-stone-300 outline-0 rounded-sm mb-4 border-b-2 border-stone-400"
                   type={type}
                   maxLength="64"
            />
        </>
    )
}