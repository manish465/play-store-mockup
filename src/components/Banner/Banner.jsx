import React from "react";

import { Grid, makeStyles } from "@material-ui/core";

import Img1 from "../../assets/BannerImage/img-1.png";
import Img2 from "../../assets/BannerImage/img-2.png";

import CardImage from "./CardImage";

const useStyles = makeStyles({
    cardGrid: {
        marginTop: "27px",
    },
});

const Banner = () => {
    const classes = useStyles();

    return (
        <Grid container justify='space-around' className={classes.cardGrid}>
            <CardImage imgurl={Img1} />
            <CardImage imgurl={Img2} />
        </Grid>
    );
};

export default Banner;
