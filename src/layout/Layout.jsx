import React from 'react';
import { Navigation } from '../components/Navigation';

const Layout = ({ children, innerRef }) => {
    return (
        <>
            <Navigation ref={innerRef} />
            <div className='section-content'>{children}</div>
        </>
    );
};

export default Layout;
