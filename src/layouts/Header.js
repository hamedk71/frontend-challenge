import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import headerLinks from '../configs/headerLinks';

export default function Header() {
    const { pathname } = useLocation()

    return (
        <header className='header container'>
            <div className='header__left'>
                <Link to='/'>
                    <img
                        className='header__logo'
                        src="/images/logo.png"
                        alt="logo" />
                </Link>
                <div className="header__menu">
                    {headerLinks.map(({ title, src }) => (
                        <NavLink
                            key={title} className='header__link'
                            to={src}>
                            {title}
                        </NavLink>
                    ))}
                </div>
            </div>
            {
                pathname !== '/register' ?
                    <div className="header__right">
                        <Link to={'/register'}>
                            <Button
                                className='header__button'
                                title='Register' />
                        </Link>
                    </div>
                    :
                    ''
            }

        </header>
    )
}
