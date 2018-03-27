import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

export default class FirstScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOn: false
		}
	}

	componentDidMount() { // func ready
		console.log(this.props.alde)
		if(this.props.alde == 'Home') {
			this.setState({isOn: true})
		}
	}
	
	changeState() {
		this.setState({isOn: true})
	}

	render() {
		return(
			<View>
				<Text>This is {this.state.name}</Text>
				<Text>My new title should be  {this.props.alde}</Text>
				<Button title='Submit' onPress={this.changeState.bind(this)}/>
			</View>
		);
	}
}

AppRegistry.registerComponent('FirstScreen', () => FirstScreen);