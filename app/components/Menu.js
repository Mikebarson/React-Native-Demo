import React, { Component } from 'react';
import { AppRegistry, View, Text, ListView, TouchableHighlight } from 'react-native';
import { List, ListItem, Button, Card } from 'react-native-elements';
import Api from '../libs/api';

export default class Menu extends Component {
	constructor() {
		super();
		const dataStore = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			menuDataSource: dataStore,
		}
	}

	static navigationOptions = {
		title: 'Menu'
	}

	componentDidMount() {
		Api.get('menu-api').then((resp) => {
			this.setState({menuDataSource: this.state.menuDataSource.cloneWithRows(resp)})
		})
	}

	renderRow(menu, sectionId, rowId, hightlightRow) {
		const { navigate } = this.props.navigation;		
		return (
			<TouchableHighlight onPress={() => navigate('MenuDetail', {menu: menu})}>
				<View>
					<ListItem roundAvatar 
							key={menu.id} 
							title={menu.name} 
							avatar='https://www.designboom.com/wp-content/uploads/2016/07/patricia-piccinini-graham-transport-accident-commission-designboom-1800.jpg'/>
				</View>
			</TouchableHighlight>
		)
	}

	render() {
		return(
			<List containerStyle={{marginBottom: 20}}>
				<ListView dataSource={this.state.menuDataSource} renderRow={this.renderRow.bind(this)}/>
			</List>
		);
	}
}

AppRegistry.registerComponent('Menu', () => Menu);