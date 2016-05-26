var React = require('react-native');
var {
  Text,
  View,
  AppRegistry
} = React;

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
