import React, { useEffect, useMemo, useRef } from 'react'

export default function StepMap({
    step = 1,
    totalStep = 2 }) {
    const line = useRef(null)
    const items = useMemo(() => Array.from({ length: totalStep }, (_, i) => i + 1), [])

    useEffect(() => {
        let lineWidth = (100 / (totalStep - 1)) * (step - 1)
        line.current.style.width = `${lineWidth}%`
    }, [step])



    return (
        <div className='stepMap'>
            <div ref={line} className="stepMap__line">
            </div>
            {items.map((item) => (
                <div
                    key={item}
                    className={`stepMap__item ${step >= item ? 'active' : ''}`}>
                    {item}
                </div>
            ))}
        </div>
    )
}
