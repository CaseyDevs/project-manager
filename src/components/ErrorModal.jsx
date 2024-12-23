import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'


const ErrorModal = function({ children, buttonCaption }, ref) {
    const dialog = useRef();
    
    // Expose custom component methods to parent component using ref
    useImperativeHandle(ref, () => {
        return {
            // Open model using custom open() method
            open() {
                dialog.current.showModal();
            }
        }
    });

    // Render into DOM outside of the React Root
    return createPortal(
        <dialog ref={dialog} className='px-6 py-4 bg-stone-800 text-stone-400 text-center rounded-xl'>
            {children}
            <form method="dialog">
                <button className='text-rose-600 underline'>{buttonCaption}</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
}

export default forwardRef(ErrorModal);