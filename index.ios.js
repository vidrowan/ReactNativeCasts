import formatTime from 'minutes-seconds-milliseconds';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var Stopwatch = React.createClass({
  getInitialState: function(){
    return {
      timeElapsed: null
    }
  },
  render: function() {
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={[this.border('red'), styles.timerWrapper]}>
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={[this.border('green'), styles.buttonWrapper]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>
      <View style={[styles.footer, this.border('blue')]}>
        <Text>
          I am a list of Laps
        </Text>
      </View>
    </View>
  },
  startStopButton: function() {
    return <TouchableHighlight
    underlayColor="gray"
    onPress={this.handleStartPress}
    style={[styles.button, styles.startButton]}
    >
          <Text>
            Start
          </Text>
        </TouchableHighlight>
  },
  lapButton: function() {
    return <View style={styles.button}>
          <Text>
            Lap
          </Text>
        </View>
  },
  handleStartPress: function() {
    var startTime = new Date();

    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);

  },
  border: function(color) {
    return {
      /*
      borderColor: color,
      borderWidth: 4
      */
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, //fill screen
    alignItems: 'stretch',
  },
  header: { // Yellow
    flex: 1
  },
  footer: { //Blue
    flex: 1
  },
  timerWrapper: { // Red
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { // Green
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  }
});

AppRegistry.registerComponent('stopwatch', () => Stopwatch);
