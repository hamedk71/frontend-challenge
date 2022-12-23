import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../../components/Button'
import RadioButton from '../../components/RadioButton';
import Input from '../../components/Input'
import newsLetter from '../../configs/newsLetter';
import { EMAIL_REG } from '../../configs/regex';
import { createUser } from 'sdk';
import useLoading from '../../hooks/useLoading';

export default function SecondStep({ setStep, setData, data }) {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const [loading, callback] = useLoading()

    const onSubmit = (obj) => {
        callback(createUser, { ...obj, ...data })
            .then(() => {
                setStep(0)
                setData({})
            })
    }

    const backHandler = () => {
        const values = getValues()
        setData(prev => ({ ...prev, ...values }))
        setStep(prev => prev - 1)
    }
    return (
        <section className='register__section'>
            <form
                className='register__form'
                action="submit"
                onSubmit={handleSubmit(onSubmit)}>
                <Input
                    disabled={loading}
                    title={'email'}
                    error={errors?.email?.message || ''}
                    {...register("email", {
                        required: " is required.",
                        value: data?.email || '',
                        validate: true,
                        pattern: {
                            value: EMAIL_REG,
                            message: " is incorrect."
                        },
                    })}
                />
                <RadioButton
                    disabled={loading}
                    form={register("newsletter", {
                        required: " is required.",
                        value: data?.newsletter || '',
                    })}
                    error={errors?.newsletter?.message || ''}
                    data={newsLetter}

                />
                <div className='register__action'>
                    <Button
                        className='register__button'
                        scale={'lg'}
                        title='Back'
                        variant='outline'
                        loading={loading}
                        spinner={false}
                        onClick={backHandler}
                        type='button'
                    />
                    <Button
                        loading={loading}
                        className='register__button'
                        scale={'lg'}
                        title='Send'
                    />
                </div>
            </form>
        </section>
    )
}