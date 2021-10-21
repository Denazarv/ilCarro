import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import ValueLabel from "@material-ui/core/Slider/ValueLabel";
import Typography from "@material-ui/core/Typography";

const StyledValueLabel = withStyles({
    offset: {
        top: 18,
        left: props =>
            props.index === 0 ? "calc(-50% + -20px)" : "calc(-50% + 12px)"
    },
    circle: {
        transform: props => (props.index === 0 ? "rotate(180deg)" : "rotate(90deg)")
    },
    label: {
        transform: props => (props.index === 0 ? "rotate(180deg)" : "rotate(-90deg)")
    }
})(ValueLabel);

const useStyles = makeStyles({
    root: {
        width: '19vw'
    }
});

const MySlider = withStyles({
    root: {
        color: "#ea2340",
        height: 2,
        padding: "15px 0"
    },

    track: {
        height: 4
    },
    thumb: {
        background: "transparent",
        "&:focus,&:hover,&$active": {
            boxShadow: "inherit"
        }
    },
    rail: {
        height: 4,
        opacity: 0.5,
        backgroundColor: "#ea2340",
    },
    mark: {
        backgroundColor: "#ea2340",
        height: 8,
        width: 1,
        marginTop: -2
    }
})(Slider);

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider() {
    const classes = useStyles();
    const [value] = React.useState([31, 57]);

    return (
        <div className={classes.root}>
            <Typography>
                Price range ($/per day):
            </Typography>
            <MySlider
                defaultValue={value}
                valueLabelDisplay="on"
                ValueLabelComponent={StyledValueLabel}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
