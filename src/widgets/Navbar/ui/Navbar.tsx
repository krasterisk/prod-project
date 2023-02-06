import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string

}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar,{}, [className])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О Сайте</Link>

        </div>
    );
};

export default Navbar;