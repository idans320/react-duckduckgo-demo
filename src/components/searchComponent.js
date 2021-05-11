import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import Autocomplete from '@material-ui/lab/Autocomplete';
import {read_recent} from "../shared/api"
function SearchComponent() {
    let [recentOptions,setRecentOptions] = useState([])
    useEffect(() => {
      read_recent().then((data) => { 
        setRecentOptions(data)
      })
    },[])
    return (
      <FormControl variant="filled">
        <Autocomplete
        id="search-input"
        options={recentOptions}
        getOptionLabel={(option) => option.value}
        getOptionSelected={(option, value) => option.id === value.id}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="filled" />}
      />
      </FormControl>
    )
}

export default SearchComponent
