import React from 'react'
import { useForm } from "react-hook-form";
import Input from '../../components/Input'
import Button from '../../components/Button'
import { NAME_REG, NUMBER_REG } from '../../configs/regex';

export default function FirstStep({ data, setData, setStep }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (obj) => {
        setData(prev => ({ ...prev, ...obj, age: +obj.age }))
        setStep(prev => prev + 1)
    }

    return (
        <section className='register__section'>
            <form
                className='register__form'
                action="submit"
                onSubmit={handleSubmit(onSubmit)}>
                <Input title={'name'}
                    error={errors?.name?.message || ''}
                    {...register("name", {
                        required: " is required.",
                        value: data?.name || '',
                        pattern: {
                            value: NAME_REG,
                            message: " is incorrect."
                        },
                        minLength: {
                            value: 3,
                            message: " must exceed 3 characters"
                        }
                    })}
                />
                <Input
                    error={errors?.age?.message || ''}
                    title={'age'}
                    {...register("age", {
                        required: "is required.",
                        value: data?.age,
                        maxLength: {
                            value: 3,
                            message: "is too much"
                        },
                        pattern: {
                            value: NUMBER_REG,
                            message: "is number only."
                        },
                    })}
                />
                <div className="register__action">
                    <Button
                        className='register__button'
                        scale={'lg'}
                        title='NEXT STEP' />
                </div>
            </form>
        </section>
    )
}
