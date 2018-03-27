import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, ListView, TouchableHighlight } from 'react-native';
import { List, ListItem, Button, Card } from 'react-native-elements';

export default class MenuDetail extends Component {

	static navigationOptions = {
		title: 'Menu Detail'
	}

	render() {
		const { params } = this.props.navigation.state;
		const menu = params ? params.menu : null;
		return(
			<Card title={menu.name}>
				<View>
					<Text>Description: {menu.description}</Text>
				</View>
			</Card>
		)
	}
}

AppRegistry.registerComponent('MenuDetail', () => MenuDetail)