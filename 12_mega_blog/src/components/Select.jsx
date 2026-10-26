import React, { useId } from 'react'

// second method to define forwardRef:
const Select = ({
    options,
    label,
    className = "",
    ...props
}, ref) => {
    const id = useId();

    return (
        <>
            <div className='w-full'>
                {label && (
                    <label
                        className=''
                        htmlFor={id}
                    >
                    </label>
                )}

                <select
                    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                    {...props}
                    id={id}
                    ref={ref}
                >
                    {/* if options does not have any value then we use ? */}
                    {options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default Select
// also optional
// export default React.forwardRef(Select) 
