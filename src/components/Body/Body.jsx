import React from "react";
import data from "../../data/data";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
    content: {
        marginTop: "27px",
        marginLeft: "26px",
    },
    heading: {
        color: "#D9D9D9",
    },
    apps: {
        marginTop: "24px",
        marginRight: "24px",
        justifyContent: "space-between",
    },
    text: {
        color: "#D9D9D9",
    },
});

const Body = () => {
    const classes = useStyles();

    const cards = data.map((card) => (
        <div className={classes.apps}>
            <img src={card.imgUrl} alt='' />
            <Typography className={classes.text} align='left'>
                {card.name}
            </Typography>
            <Typography className={classes.text} align='left'>
                {card.space}
            </Typography>
        </div>
    ));

    return (
        <div className={classes.content}>
            <Typography className={classes.heading} align='left' variant='h4'>
                Discover Something new
            </Typography>
            <Grid container>{cards}</Grid>
        </div>
    );
};

export default Body;
