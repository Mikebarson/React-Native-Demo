import { StackNavigator } from 'react-navigation';
import Menu from '../components/Menu';
import MenuDetail from '../components/MenuDetail';

const routeConfiguration = {
	Menu: { screen: Menu },
	MenuDetail: { screen: MenuDetail }
}

export default MenuStack = StackNavigator(routeConfiguration, {})
