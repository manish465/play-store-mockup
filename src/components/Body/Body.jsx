import React from "react";
import data from "../../data/data";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    content: {
        marginTop: "47px",
        marginLeft: "26px",
    },
    heading: {
        color: "#D9D9D9",
    },
    apps: {
        marginTop: "54px",
    },
});

const Body = () => {
    const classes = useStyles();

    const cards = data.map((card) => (
        <div className={classes.apps}>
            <img src={card.imgUrl} alt='' />
        </div>
    ));

    return (
        <div className={classes.content}>
            <Typography className={classes.heading} align='left' variant='h4'>
                Discover Something new
            </Typography>
            {cards}
        </div>
    );
};

export default Body;
