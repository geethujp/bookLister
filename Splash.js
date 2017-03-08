import React, {Component}from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class extends Component {
    render() {
        return (
        <View style={styles.container}>
        	<Text style={styles.welcome}>
        	Geethu Jose
        	</Text>
        	<Text style={styles.instructions}>
			Address
        	</Text>
        	<Text style={styles.instructions}>
        	Pongachira House, {'\n'}
   			Elookkara,{'\n'}
   			Muppatahdom P.O,{'\n'}
   			Aluva - 683110{'\n'}
        	</Text>
      	</View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});