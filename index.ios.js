// Impoart some code we need
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var DayItem = require('./src/day-item');

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
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
