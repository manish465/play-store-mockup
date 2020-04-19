import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    content: {
        marginTop: "97px",
        marginLeft: "26px",
    },
    heading: {
        color: "#D9D9D9",
    },
});

const Body = () => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Typography className={classes.heading} align='left' variant='h4'>
                Discover Something new
            </Typography>
        </div>
    );
};

export default Body;
