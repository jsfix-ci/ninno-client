import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import CopyToClipboard from 'react-copy-to-clipboard';

export default class SsnItem extends Component {

    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.copySsn(this.props.ssn.ssn);
    }

    render() {
        const {
            ssn,
        } = this.props;

        if (!ssn.ssn) {
            return null;
        }

        return (
            <li
                className={
                    classNames(
                        'ninno-fnr__list-item',
                        { 'ninno-fnr__list-item--copied': ssn.copied },
                    )
                }
            >
                {ssn.ssn}
                <CopyToClipboard text={ssn.ssn}>
                    <button
                        className="ninno-fnr__copy-button"
                        aria-label="kopier"
                        type="button"
                        onClick={this.onClick}
                    >
                        &nbsp;
                    </button>
                </CopyToClipboard>
            </li>
        );
    }
}

SsnItem.propTypes = {
    copySsn: PropTypes.func.isRequired,
    ssn: PropTypes.shape({
        copied: PropTypes.bool,
        ssn: PropTypes.string,
    }).isRequired,
};
