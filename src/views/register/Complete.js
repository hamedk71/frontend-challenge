import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Checked from '../../assets/icons/Checked';

export default function Complete() {
    return (
        <section className='registerComplete'>
            <div className="registerComplete__svg">
                <Checked />
                <div className="registerComplete__content">
                    <div className="registerComplete__title">
                        Registration Done!
                    </div>
                    <Link to='/'>
                        <Button
                            title='Home' 
                            scale='lg'/>
                    </Link>
                </div>
            </div>
        </section>
    )
}
