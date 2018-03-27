import { StackNavigator } from 'react-navigation';
import Home from '../components/Home';

const routeConfiguration = {
	Home: { screen: Home }
}

export default HomeStack = StackNavigator(routeConfiguration, {})
