import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export default function PageHeader({ children, label, className }) {
    const cn = classNames('arcman-page-header', className);
    return (
        <header className={cn}>
            <div className="arcman-page-header__label">{label}</div>
            <div className="arcman-page-header__actions">{children}</div>
        </header>
    );
}

PageHeader.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    label: PropTypes.any,
};
