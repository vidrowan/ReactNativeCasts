// Impoart some code we need
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
});

// Style teh React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //vertical
    alignItems: 'flex-start' //horizontal
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
