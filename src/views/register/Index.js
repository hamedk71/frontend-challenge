import React, { useState } from 'react'
import StepMap from '../../components/StepMap'
import Complete from './Complete'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

export default function Index() {
    const [step, setStep] = useState(1)
    const [data, setData] = useState({})

    return (
        <main className='register container'>
            {
                step ?
                    <>
                        <h1 className='register__title'>
                            Create new account
                        </h1>
                        <StepMap
                            step={step}
                            totalStep={2}
                        />
                    </>
                    :
                    ''
            }
            {step === 1 ?
                <FirstStep
                    setStep={setStep}
                    setData={setData}
                    data={data} />
                : step === 2 ?
                    <SecondStep
                        setStep={setStep}
                        setData={setData}
                        data={data} />
                    : !step ?
                        <Complete />
                        : ''}

        </main>
    )
}
