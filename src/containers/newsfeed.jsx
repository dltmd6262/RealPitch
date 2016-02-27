import React from "react-native";
import Styles from "../styles";
import { connect } from 'react-redux'
import {fetchNewsfeedData, addNewMusic } from '../actions/newsfeed';

import NewsfeedView from '../components/newsfeed';

const mapStateToProps = (state) => {
  return {
    newsfeedCardData: state.newsfeedCardData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewsfeedData: () => {
      dispatch(fetchNewsfeedData());
    },
    addNewMusic: (data) => {
      dispatch(addNewMusic(data));
    },
  };
};

const NewsFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsfeedView);

export default NewsFeed
