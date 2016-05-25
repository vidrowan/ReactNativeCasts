// Import some code we need
import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

// Create our component
var DayItem = React.createClass({
  render: function() {
    return <Text style={styles.day}>
      {this.props.day}
    </Text>
  }
});

// Make this code available elsewhere
module.exports = DayItem;
