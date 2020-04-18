import React, { useState } from "react";

import { Tabs, Tab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        color: "white",
        textTransform: "initial",
    },
    indicator: {
        background: "#00F110",
    },
});

const TabBar = () => {
    const [value, setValue] = useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs
            variant='fullWidth'
            classes={{ root: classes.root, indicator: classes.indicator }}
            value={value}
            onChange={handleChange}>
            <Tab classes={{ root: classes.root }} label='For you' />
            <Tab classes={{ root: classes.root }} label='Top charts' />
            <Tab classes={{ root: classes.root }} selected label='Events' />
            <Tab classes={{ root: classes.root }} label='Premium' />
            <Tab classes={{ root: classes.root }} label='Categories' />
            <Tab classes={{ root: classes.root }} label='Family' />
            <Tab classes={{ root: classes.root }} label='Editors Choice' />
        </Tabs>
    );
};

export default TabBar;
