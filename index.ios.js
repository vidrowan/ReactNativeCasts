// Impoart some code we need
var React = require('react-native');

// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
})

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
