import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/Profile/Profile';
import Home from '../screens/Home/Home';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null}}>
      <Drawer.Screen name={'Home'} component={Home} />
      <Drawer.Screen name={'Profile'} component={Profile} />
    </Drawer.Navigator>
  );
};
export default MainDrawer;
