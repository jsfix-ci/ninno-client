import React from 'react';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { fullWhite } from 'material-ui/styles/colors';

const iconButton = (
    <IconButton>
        <MoreVertIcon color={fullWhite} />
    </IconButton>
);

export default function AppMenu() {
    return (
        <IconMenu
          iconButtonElement={iconButton}
        >
            <MenuItem
              primaryText="?"
            />
        </IconMenu>
    );
}
