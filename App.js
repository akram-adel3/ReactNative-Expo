import CreateStackNavigator from "react-navigation-stack/src/navigators/createStackNavigator";
import HomeScreen from "./screens/HomeScreen";
import {createAppContainer} from "react-navigation";
import RestaurantScreen from "./screens/RestaurantScreen";


const navigator = CreateStackNavigator({
    Home : HomeScreen,
    Restaurant: RestaurantScreen
})

export default createAppContainer(navigator)
