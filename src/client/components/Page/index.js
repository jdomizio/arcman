import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export default function Page({ children, className }) {
    const cn = classNames('arcman-page', className);
    return <section className={cn}>{children}</section>;
}

Page.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
};
