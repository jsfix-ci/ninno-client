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
                        'ninno-fnr-list__item',
                        { 'ninno-fnr-list__item--copied': ssn.copied },
                    )
                }
            >
                {ssn.ssn}
                <CopyToClipboard text={ssn.ssn}>
                    <button
                      className="ninno-fnr-list__copy-button"
                      type="button"
                      onClick={this.onClick}
                    >
                        kopier
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
