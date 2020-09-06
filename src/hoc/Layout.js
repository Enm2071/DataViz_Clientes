import React from 'react';
import classes from './Layout.module.css';


const Layout = (props) => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;