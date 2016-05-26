import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Stopwatch = React.createClass({
  render: function() {
    return <View>
      <View>
        <View>
          <Text>
            00:00:00
          </Text>
        </View>
      </View>
      <View>
        {this.startStopButton()}
        {this.lapButton()}
      </View>
      <View>
        <Text>
          I am a list of Laps
        </Text>
      </View>
    </View>
  },
  startStopButton: function() {
    return <View>
          <Text>
            Start
          </Text>
        </View>
  },
  lapButton: function() {
    return <View>
          <Text>
            Lap
          </Text>
        </View>
  }
});

var style = StyleSheet.create({
  container: {
    flex: 1, //fill screen
    alignItems: 'stretch',
  },
  header: { // Yellow
    flex: 1
  },
  footer: { //Blue
    flex: 1
  }
});

AppRegistry.registerComponent('stopwatch', () => Stopwatch);
