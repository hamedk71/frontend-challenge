import React from 'react'
import Loader from '../assets/icons/Loader'

export default function Button({
    onClick = () => { },
    className = '',
    title = 'button',
    variant = 'primary',
    scale = 'md',
    loading = false,
    spinner = true,
    ...props
}) {
    return (
        <button
            {...props}
            className={`button ${className} ${variant} ${scale}`}
            onClick={onClick}
            disabled={loading}
        >
            {loading && spinner ?
                <>
                    Loading
                    <Loader />
                </> :
                title}

        </button>
    )
}
