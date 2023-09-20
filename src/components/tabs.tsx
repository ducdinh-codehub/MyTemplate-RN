import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favourite from '../screen/favourite';
import Card from '../screen/card';
import User from '../screen/user';
import Shop from '../screen/shop';
import Dashboard from '../screen/dashboard';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Card" component={Card} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
};

export default Tabs;
