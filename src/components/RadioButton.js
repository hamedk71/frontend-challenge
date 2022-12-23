import React, { forwardRef } from 'react'

const RadioButton = forwardRef(({
    error,
    disabled,
    data = [],
    form,
}, ref) => {

    return (
        <div className='radioButtons__wrapper'>
            <div className={`radioButtons__title ${error ? 'error' : ''}`}>
                news letter{error}
            </div>
            <div
                ref={ref}
                className="radioButtons">
                {data.map((item) => (
                    <div
                        key={item}
                        className='radioButtons__item'>
                        <input
                            {...form}
                            value={item}
                            id={item}
                            disabled={disabled}
                            type='radio'
                            className='radioButtons__item-input' />
                        <label
                            key={item}
                            htmlFor={item}
                            className='radioButtons__item-label' >
                            {item}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
})

export default RadioButton
