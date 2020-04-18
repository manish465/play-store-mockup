import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";

import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import AppsIcon from "@material-ui/icons/Apps";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import BookIcon from "@material-ui/icons/Book";

const useStyles = makeStyles({
    root: {
        background: "inherit",
        width: "auto",
        justifyContent: "space-around",
    },
    tab: {
        color: "#00F110",
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState("games");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.root}>
            <BottomNavigationAction
                label='Games'
                value='games'
                classes={{ selected: classes.tab }}
                icon={<VideogameAssetIcon />}
            />
            <BottomNavigationAction
                label='Apps'
                value='app'
                classes={{ selected: classes.tab }}
                icon={<AppsIcon />}
            />
            <BottomNavigationAction
                label='Movies'
                value='movies'
                classes={{ selected: classes.tab }}
                icon={<LocalMoviesIcon />}
            />
            <BottomNavigationAction
                label='Books'
                value='books'
                classes={{ selected: classes.tab }}
                icon={<BookIcon classes={{ colorAction: classes.tab }} />}
            />
        </BottomNavigation>
    );
}
