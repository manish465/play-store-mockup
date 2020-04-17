import React from "react";
import { InputBase, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    inputBase: {
        background: "#9E9E9E",
        borderRadius: "21px",
        width: "1868px",
        height: "49px",
        marginTop: "22px",
        boxShadow: "0 3px 14px",
    },
});

const Header = () => {
    const classes = useStyles();

    return <InputBase className={classes.inputBase} />;
};

export default Header;
