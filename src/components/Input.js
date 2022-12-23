import React, { forwardRef, useId } from 'react'

const Input = forwardRef(({
    title,
    type = 'text',
    error,
    ...props
}, ref) => {
    const id = useId()

    return (
        <label
            className={`input ${error ? 'error' : ''}`}
            htmlFor={id}>
            {title} {error}
            <input
                {...props}
                className='input__field'
                autoComplete='off'
                ref={ref}
                id={id}
                type={type} />
        </label>
    )
})

export default Input