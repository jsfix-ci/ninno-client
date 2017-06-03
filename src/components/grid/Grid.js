import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

const Grid = ({ children, className }) =>
    <div
        className={
            classNames(
                className,
                'ninno-grid',
            )
        }
    >
        {children}
    </div>;

Grid.propTypes = {
    children: node.isRequired,
    className: string,
};

export default Grid;
