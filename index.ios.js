import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

var Stopwatch = React.createClass({
  render: function() {
      
  }
});

/*
AppRegistry.registerComponent('stopwatch', function() {
  require Stopwatch;
});
*/
AppRegistry.registerComponent('stopwatch', () => Stopwatch);
