import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

export default class SecondScreen extends Component {
	render() {
		return(
			<View>
				<Text>This is SecondScreen</Text>
				<Button title='Submit secondscreen'/>
			</View>
		);
	}
}

AppRegistry.registerComponent('SecondScreen', () => SecondScreen);