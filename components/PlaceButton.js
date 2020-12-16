import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class PlaceButton extends React.Component {
 
  render() {
    return (
      <TouchableOpacity
        style={styles.chunkButton}
        >
        <Text style={styles.displayText}>{this.props.numberChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'green',
    boxShadow:"2px 2px pink"
  }
});