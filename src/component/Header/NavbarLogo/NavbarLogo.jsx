import React from 'react';
import { Link } from "react-router-dom";

const NavbarLogo = () => {
    return (
        <Link to="/admin" className="text-light">DASHBOARD</Link>
    );
};

export default NavbarLogo;