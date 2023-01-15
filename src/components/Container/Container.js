import PropTypes from 'prop-types';

import React from 'react';
import style from './Container.module.css';

export default function Container({ children }) {
  return (
    <div className={`${style.section} ${style.container}`}>{children}</div>
  );
}

Container.propTypes = {
  children: PropTypes.element,
};
