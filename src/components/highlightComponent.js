import React from 'react'
import TextField from "@material-ui/core/TextField"
import { setHighlight } from "../redux/actions";
import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux";

function mapDispatchToProps(dispatch){
    return { setHighlight: text =>  dispatch(setHighlight(text)) };
}

function HighlightComponent({setHighlight}) {
    return (
        <Grid alignItems = "stretch" justify = "center" container>
        <Grid item md = {2}>
        <TextField label = "Highlight text" onChange = {(e) => setHighlight(e.target.value)}/>
        </Grid>
        </Grid>
    )
}

const Highlight = connect(null, mapDispatchToProps)(HighlightComponent);

export default Highlight
