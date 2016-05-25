// Impoart some code we need
import Moment from 'moment'; // alternatively: var Moment = require('moment');
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DayItem from './src/day-item'; // alternatively var DayItem = require('./src/day-item');

// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() {
    return DAYS.map(function(day){
      // Called 7 times according to the DAYS array
      return <DayItem day={day} />
    })
  }
});

// Style teh React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
