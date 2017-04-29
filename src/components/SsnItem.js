import React, { Component, PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import ContentCopyIcon from 'material-ui/svg-icons/content/content-copy';

import CopyToClipboard from 'react-copy-to-clipboard';

const getStyle = copied => ({
    color: copied ? 'red' : 'black',
    flexBasis: '30%',
    flexGrow: 1,
    listStyleType: 'none',
    minWidth: 150,
    padding: '5px 0',
});

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

        return (
            <li style={getStyle(ssn.copied)}>
                {ssn.ssn}
                <CopyToClipboard text={ssn.ssn}>
                    <IconButton
                      onTouchTap={this.onClick}
                      tooltip="kopier"
                      tooltipPosition="top-left"
                    >
                        <ContentCopyIcon />
                    </IconButton>
                </CopyToClipboard>
            </li>
        );
    }
}

SsnItem.propTypes = {
    copySsn: PropTypes.func.isRequired,
    ssn: PropTypes.shape({
        copied: PropTypes.bool.isRequired,
        ssn: PropTypes.string.isRequired,
    }).isRequired,
};
