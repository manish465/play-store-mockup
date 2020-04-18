import React from "react";

import {
    InputBase,
    makeStyles,
    IconButton,
    Grid,
    Avatar,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import MicNoneIcon from "@material-ui/icons/MicNone";
import AvatarImg from "../../assets/AvatarCircleImage/Avatar.png";

const useStyles = makeStyles({
    inputHeader: {
        width: "auto",
        background: "#9E9E9E",
        borderRadius: "21px",
        height: "80px",
        margin: "22px 26px",
        boxShadow: "0 3px 14px",
        justifyContent: "center",
    },
    menueIconButton: {
        marginLeft: "20px",
        color: "#D1D1D1",
    },
    iconAvatar: {
        marginRight: "20px",
    },
    micButton: {
        color: "#D1D1D1",
        marginRight: "20px",
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <Grid alignItems='center' className={classes.inputHeader} container>
            <Grid container alignItems='center' xs>
                <IconButton className={classes.menueIconButton}>
                    <MenuIcon fontSize='large' />
                </IconButton>
                <InputBase placeholder='Search for apps and games' />
            </Grid>
            <Grid
                container
                alignItems='center'
                justify='flex-end'
                className={classes.iconAvatar}
                xs>
                <IconButton className={classes.micButton}>
                    <MicNoneIcon fontSize='large' />
                </IconButton>
                <IconButton>
                    <Avatar src={AvatarImg} />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default Header;
