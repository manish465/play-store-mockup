import React from "react";

import { InputBase, makeStyles, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
    inputHeader: {
        background: "#9E9E9E",
        borderRadius: "21px",
        height: "49px",
        margin: "22px 26px",
        boxShadow: "0 3px 14px",
        textAlign: "start",
    },
    menueIcon: {
        padding: "11px",
        marginLeft: "20px",
        marginRight: "20px",
        color: "#D1D1D1",
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.inputHeader}>
            <IconButton className={classes.menueIcon}>
                <MenuIcon />
            </IconButton>
            <InputBase placeholder='Search for apps and games' />
        </div>
    );
};

export default Header;
