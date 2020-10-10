/* eslint-disable prettier/prettier */
/*import * as React from 'react';
import {Searchbar} from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default MyComponent;
import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import SearchBar from "react-native-dynamic-search-bar";

 class MyComponent extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
export default  MyComponent;*/

import React, { Component } from "react";
import { View } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
 
 class MyComponent extends Component {
  handleOnChangeText = (text) => {
    // ? Visible the spinner
    this.setState({
      searchText: text,
      spinnerVisibility: true,
    });
 
    // ? After you've done to implement your use-case
    // ? Do not forget to set false to spinner's visibility
    this.setState({
      spinnerVisibility: false,
    });
  };
 
  render() {
   // const { spinnerVisibility } = this.state;
    return (
      <View>
        <SearchBar
          height={50}
          fontSize={20}
          fontColor="white"
          iconColor="white"
          shadowColor="#282828"
          cancelIconColor="white"
          backgroundColor="transparent"
          
       //   spinnerVisibility={spinnerVisibility}
          placeholder="Search"
          fontFamily="BurbankBigCondensed-Black"
        shadowStyle={this.searchBarShadowStyle}
          onChangeText={this.handleOnChangeText}
        
        />
      </View>
    );
  }
}
export default  MyComponent;