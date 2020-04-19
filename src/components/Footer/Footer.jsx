import React from "react";

import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
} from "@material-ui/core/styles";

import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";

import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import AppsIcon from "@material-ui/icons/Apps";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import BookIcon from "@material-ui/icons/Book";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

const useStyles = makeStyles({
    root: {
        background: "inherit",
        width: "auto",
        justifyContent: "space-around",
    },
});

const theam = createMuiTheme({
    palette: { primary: { main: "#00F110" } },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState("games");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theam}>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                className={classes.root}>
                <BottomNavigationAction
                    label='Games'
                    value='games'
                    icon={<VideogameAssetIcon />}
                />
                <BottomNavigationAction
                    label='Apps'
                    value='app'
                    icon={<AppsIcon />}
                />
                <BottomNavigationAction
                    label='Movies'
                    value='movies'
                    icon={<LocalMoviesIcon />}
                />
                <BottomNavigationAction
                    label='Books'
                    value='books'
                    icon={<BookIcon classes={{ colorAction: classes.tab }} />}
                />
                <BottomNavigationAction
                    label='Music'
                    value='music'
                    icon={
                        <MusicNoteIcon classes={{ colorAction: classes.tab }} />
                    }
                />
                <BottomNavigationAction
                    label='Travel'
                    value='travel'
                    icon={
                        <LoyaltyIcon classes={{ colorAction: classes.tab }} />
                    }
                />
            </BottomNavigation>
        </ThemeProvider>
    );
}
