import React from 'react';
import { bool, oneOfType, node, number, shape, string } from 'prop-types';
import classNames from 'classnames';

const sizeClasses = (size, def) => {
    switch (typeof def) {
        case 'undefined': return '';
        case 'object':
            return classNames({
                [`ninno-grid__col--${size}-${def.cols}`]: def.cols,
                [`ninno-grid__col--${size}-offset-${def.offset}`]: def.offset,
            });
        default: return `ninno-grid__col--${size}-${def}`;
    }
};

const GridCol = ({ center, children, className, lg, md, sm }) => {
    const classes = [
        className,
        'ninno-grid__col',
        sizeClasses('lg', lg),
        sizeClasses('md', md),
        sizeClasses('sm', sm),
        classNames({
            'ninno-grid__col--center': center,
        }),
    ].filter(c => c).join(' ');

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

const sizeProp = oneOfType([
    number,
    shape({
        cols: number,
        offset: number,
    }),
]);

GridCol.propTypes = {
    center: bool,
    children: node.isRequired,
    className: string,
    md: sizeProp,
    sm: sizeProp,
    lg: sizeProp,
};

export default GridCol;
