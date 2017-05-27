import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

const GridRow = ({ className, children }) =>
    <div
      className={
            classNames(
                className,
                'ninno-grid__row',
            )
        }
    >
        {children}
    </div>;

GridRow.propTypes = {
    children: node.isRequired,
    className: string,
};

export default GridRow;
