import React from 'react';

export default function Statistics({ data }) {
    return (
        <div className="statistics">
            {data?.map(({ title, count } , ind) => (
                <div key={ind} className='statistics__part'>
                    <span className='statistics__count'>
                        {count}
                    </span>
                    <span className='statistics__info'>
                        {title}
                    </span>
                </div>
            ))}
        </div>
    )
}
