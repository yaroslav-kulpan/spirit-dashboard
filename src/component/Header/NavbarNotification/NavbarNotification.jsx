import React from "react";
import styles from './NavbarNotification.module.scss';

const NavbarNotification = () => {
    return (
        <>
            <div className={ styles.wrapper }>
            <i className={`fas fa-bell text-white mr-3 ${styles.icon}`}> </i>
            <i className={`fas fa-envelope text-white ${styles.icon}`}> </i>
            </div>
        </>
    )
};

export default NavbarNotification;