import React from "react";
import {Nav} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import styles from './AsideMenu.module.scss';

const AsideMenu = () => {
    return (
        <aside>
            <Nav className="flex-column">
                <NavLink to="/admin/dashboard" className={styles.link}  activeClassName={styles.active}>
                    <span className={styles.icon__wrapper}>
                    <i className="fas fa-tachometer-alt mr-2">
                    </i></span>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/admin/analytics" className={styles.link}  activeClassName={styles.active}>
                    <span className={styles.icon__wrapper}>
                    <i className="fas fa-chart-pie mr-2">
                    </i>
                    </span>
                    <span>SEO</span>
                </NavLink>
                <NavLink to="/admin/messages" className={styles.link}  activeClassName={styles.active}>
                <span className={styles.icon__wrapper}>
                    <i className="fas fa-envelope mr-2">
                    </i>
                </span>
                    <span>Messages</span>
                </NavLink>
                <NavLink to="/admin/settings" className={styles.link}  activeClassName={styles.active}>
                    <span className={styles.icon__wrapper}>
                    <i className="fas fa-cogs mr-2">
                    </i>
                    </span>
                    <span>Settings</span>
                </NavLink>
                <Link to="/admin" className={styles.link}>
                    <span className={styles.icon__wrapper}>
                    <i className="fas fa-sign-out-alt mr-2">
                    </i>
                    </span>
                    <span>Logout</span>
                </Link>
            </Nav>
        </aside>
);
};

export default AsideMenu;