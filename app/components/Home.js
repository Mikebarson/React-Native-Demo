import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';
import Api from '../libs/api';

export default class Home extends Component {

	render() {
		return(
			<View>
				<Text>This is Home</Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('Home', () => Home);