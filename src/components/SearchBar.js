/* import React from 'react';
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
    state = {
        searchTerm: ' ',
    }

    handleChange = (event) => { this.setState({ searchTrem: event.target.value }); }

    handleSubmit = () => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        Event.preventDefault();
    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: ' 25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar; */


import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

  return (
    <Paper elevation={6} style={{ padding: "8px" }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Search Here..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
}