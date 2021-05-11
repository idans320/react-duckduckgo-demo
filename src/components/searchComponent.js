import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Alert from '@material-ui/lab/Alert';
import { connect } from "react-redux";

import {readRecent, writeRecent, queryDuckDuckGo} from "../shared/api"
import { setResults } from "../redux/actions";

function query(value,setRecentOptions,setResults,setEmptyAlert,setNoResultAlert){
  if (value){
    setEmptyAlert(false)
    setNoResultAlert(false)
    writeRecent(value).then((currentOptions) => {
      setRecentOptions(currentOptions)
      queryDuckDuckGo(value).then((data) => {
        if (data.RelatedTopics.length > 0)
          setResults(data);
        else{
          setNoResultAlert(true)
        }
      })
    })
  }
  else{
    setEmptyAlert(true)
  }
}

const mapDispatchToProps = dispatch => {
  return { setResults: result =>  dispatch(setResults(result)) };
};

function SearchComponent({setResults}) {
    let [recentOptions,setRecentOptions] = useState([])
    let [searchValue, setSearchValue] = useState("")
    let [EmptyAlert,setEmptyAlert] = useState(false)
    let [NoResultAlert,setNoResultAlert] = useState(false)

    useEffect(() => {
      readRecent().then((data) => { 
        setRecentOptions(data)
      })
    },[])
    return (
        <div>
        <Grid alignItems = "stretch" justify = "center" container>
        <Grid item md = {5}>
        <Autocomplete
        freeSolo
        id="search-input"
        options={recentOptions}
        getOptionLabel={(option) => option.value}
        onInputChange = {
          (e, value) => {
            setSearchValue(value) 
        }}
        style={{ width: 300 }}
        renderInput={(params) => <TextField value = {searchValue}
         {...params} label="Search" variant="filled" />}
      />
      </Grid>
      <Grid item alignItems="stretch" style={{ display: "flex" }}>
          <Button color="secondary" variant="contained" onClick = {() => query(searchValue,setRecentOptions,setResults,setEmptyAlert, setNoResultAlert)}>
            Query
          </Button>
      </Grid>
      </Grid>
      <Alert severity = "error" style = {{marginTop : "1%",  display : EmptyAlert? "flex" : "none"}}>Search query is empty!</Alert>
      <Alert severity = "warning" style = {{marginTop : "1%",  display : NoResultAlert? "flex" : "none"}}>No Results</Alert>
      </div>
    )
}

const Search = connect(null, mapDispatchToProps)(SearchComponent);

export default Search
