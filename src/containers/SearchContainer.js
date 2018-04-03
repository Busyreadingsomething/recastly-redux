import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleSearchInputChange: q => {
    dispatch(handleSearchChange(q));
  }
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
