import React from "react";

import { makeStyles, Card, Typography, Button } from "@material-ui/core";

const CardImage = (props) => {
    const useStyle = makeStyles({
        imgBg: {
            borderRadius: "25px",
            width: "910px",
            height: "270px",
            textAlign: "start",
            backgroundImage: `url(${props.imgurl})`,
        },
        text: {
            marginTop: "20px",
            marginLeft: "25px",
        },
        check: {
            border: "2px solid black",
            borderRadius: "12px",
            marginTop: "40px",
            marginLeft: "40px",
        },
    });

    const classes = useStyle();

    return (
        <Card className={classes.imgBg}>
            <Typography className={classes.text} variant='h4'>
                50% Offer
            </Typography>
            <Typography className={classes.text} variant='h4'>
                on first purchase
            </Typography>
            <Button className={classes.check}>Check it out</Button>
        </Card>
    );
};

export default CardImage;
