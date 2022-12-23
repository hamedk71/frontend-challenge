import React from 'react'
import Statistics from '../../components/Statistics'
import statisticsData from '../../configs/statisticsData';

export default function index() {
    return (
        <main>
            <img className='main__pattern' src="./images/bg-line.svg" alt="pattern" />
            <section className='main container'>
                <div className="main__left">
                    <h2 className='main__title'>
                        Future is here
                    </h2>
                    <h1 className='main__subtitle'>
                        Hamed's platform
                    </h1>
                    <Statistics data={statisticsData} />
                </div>
                <div className="main__right">
                    <img className='main__poster' src="./images/main.png" alt="poster" />
                </div>
            </section>
        </main>
    )
}
